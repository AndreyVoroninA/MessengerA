import React from 'react';
import s from './Communication.module.scss';
import Message from './message';

const Communication = ({messages, acc}) => {

   return (
      <div className={s.messages}>
         {messages.map(mes => {
           return <Message id={mes.id_author} author={mes.author} 
          acc={acc} message={mes.message} key={mes.id} date={mes.date} time={mes.time}/>
         })
         }
      </div>
   )
}

export default Communication;