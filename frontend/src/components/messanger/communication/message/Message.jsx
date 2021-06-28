import React from 'react';
import s from './Message.module.scss';
import ava from './../../../../img/initava.jpg';

const Message = ({id, author, message, date, time}) => {
   
   return(
      <div className={s.message}>
         <img className={s.photo} src={ava}/>
         <div className={s.field_message}>
            <b className={s.author}>{author}</b> <span>{id}</span>
            <span className={s.date}>{date}, {time}</span>
            <p className={s.mes}>{message}</p>
         </div>
      </div>
   )
}

export default Message;