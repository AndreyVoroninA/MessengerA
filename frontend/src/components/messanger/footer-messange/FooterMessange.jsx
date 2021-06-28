import React, {useState, useEffect} from 'react';
import s from './FooterMessange.module.scss';
import addFile from './../../../img/add.png';
import smile from './../../../img/smile.png';
import {io} from 'socket.io-client';
const socket = io('http://localhost:3001');

const FooterMessange = ({addMessage, setAcc}) => {

   const [print, setPrint] = useState("");

   

   useEffect(() => {

      socket.on('connected', (data) => {
          console.log('handle connected: ', data)
          setAcc((prev) => [...prev, data])
      })

      socket.on('message', (data) => {
         console.log('message: ', data)
         addMessage(data)
       })
       
   }, [])

   const changeMessage = (e) => {
      setPrint(e.currentTarget.value)
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
               <input className={s.input} value={print} onChange={changeMessage} placeholder="Напишите сообщение..."/>
               <img src={smile}/>
               <button>Отправить</button>
            </form>
      </div>
   )
}

export default FooterMessange;