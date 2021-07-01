import React, {useState, useEffect} from 'react';
import s from './FooterMessange.module.scss';
import addFile from './../../../img/add.png';
import smile from './../../../img/smile.png';
import {io} from 'socket.io-client';
const socket = io('http://localhost:3001');

const FooterMessange = ({addMessage, setAcc, setToo}) => {

   const [print, setPrint] = useState("");

   const [overflow, setOverflow] = useState("");
   const [stop, setStop] = useState(false);
   

   useEffect(() => {

      socket.on('connected', (data) => {
          setAcc((prev) => [...prev, data])
          setOverflow("Напишите сообщение")
          setStop(false)
      })

      socket.on('message', (data) => {
         addMessage(data)
       })

        socket.on('overflow', (data) => {
         if (data === socket.id) {
            setOverflow("Чат переполнен, отправлять сообщения нельзя!")
            setStop(true)
         }
      })

       socket.on("disconnect", () => { 
         console.log("Кто-то отключился..."); 
     }); 
       
     socket.on('tooo', (data) => {
      setToo(true)
      setTimeout(()=> {
       setToo(false)
      }, 1000)})

   }, [])

   const debounce = (callback, delay) => {
      let timeout;
      return function (...args) {

         clearTimeout(timeout)
         timeout = setTimeout(() => {
            callback.applay(this, args)
         }, delay)
        
      }
   }

   const changeMessage = (e) => {
      setPrint(e.currentTarget.value)
      /*debounce(function (){
         socket.emit('tooo', "Набирает сообщение.....")
      }, 1000)*/
     socket.emit('tooo', "Набирает сообщение.....")
     /* socket.on('tooo', (data) => {
        setToo(true)
        setTimeout(()=> {
         setToo(false)
        }, 1000)
     })*/
   }

   const tapingMessage = (e) => {
      e.preventDefault();
      //addMessage(print);
      socket.emit('message', print)
      console.log(socket.id)
       setPrint("");
     
   }

   return(
      <div className={s.field}>
            <form className={s.form} onSubmit={tapingMessage}>
               <img src={addFile} />
               <input className={s.input} 
               value={print} onChange={changeMessage} placeholder={overflow} readOnly={stop}/>
               <img src={smile}/>
               <button>Отправить</button>
            </form>
      </div>
   )
}

export default FooterMessange;