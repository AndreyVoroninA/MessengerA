import React, {useState, useEffect} from 'react';
import s from './Messanger.module.scss';
import HeaderMessage from './header-message';
import FooterMessange from './footer-messange';
import Communication from './communication';

const Messanger = () => {

   const [messages, setMessages] = useState([]);
   const [acc, setAcc] = useState([]);
   const[too, setToo] = useState(false)

  
   const addMessage = (message) => {
      const Data = new Date();
      let mounth = Data.getMonth() + 1; if (mounth < 10) {mounth = '0'+ mounth};
      let day = Data.getDate(); if (day < 10) {day = '0'+ day};
      let hour = Data.getHours(); if (hour < 10) {hour = '0' + hour}
      let minutes = Data.getMinutes(); if (minutes < 10) {minutes = '0' + minutes}
      let newMessage =  {
      id: Date.now(),
      id_author: message[1],
      date: `${day}.${mounth}.${Data.getFullYear()}`,
      time: `${hour}:${minutes}`,
      author: 'Ты',
      message: message[0]
     }
     setMessages((prev) => [newMessage, ...prev])
     
   }
   
   return(
      <div className={s.main}>
         <HeaderMessage />
         <Communication messages={messages} acc={acc} too={too}/>
         <FooterMessange addMessage={addMessage} setAcc={setAcc} setToo={setToo} too={too}/>
      </div>
   )
}

export default Messanger;