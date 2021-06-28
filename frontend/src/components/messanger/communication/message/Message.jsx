import React from 'react';
import s from './Message.module.scss';
import ava from './../../../../img/initava.jpg';
//import {io} from 'socket.io-client';
//const socket = io('http://localhost:3001');

const Message = ({id, author, message, date, time, acc}) => {
   
   return(

            id == acc[0] ? 
            <div className={s.left}>
            <img className={s.photo} src={ava}/>
            <div className={s.field_message}>
               <b className={s.author}>{id == acc[0] ? "Ты" : "Собеседник"}</b>
               <span className={s.date}>{date}, {time}</span>
            <p className={s.mes}>{message}</p>
            </div>
         </div>
            : 
            <div className={s.message}>
            <img className={s.photo} src={ava}/>
            <div className={s.field_message}>
               <b className={s.author}>{id == acc[0] ? "Ты" : "Собеседник"}</b>
               <span className={s.date}>{date}, {time}</span>
            <p className={s.mes}>{message}</p>
            </div>
         </div>
         
   )
}

export default Message;