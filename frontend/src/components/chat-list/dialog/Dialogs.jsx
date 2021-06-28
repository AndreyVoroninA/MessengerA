import React from 'react';
import s from './Dialogs.module.scss';
import init_photo from './../../../img/initava.jpg';

const Dialogs = () => {
   return(
      <a href="#dialog" className={s.dialog}>
         <img className={s.photo} src={init_photo}/>
         <div className={s.info}>
            <b>Собеседник</b>
            <div className={s.text}>Последнее сообщение...</div>
         </div>
         <div className={s.number_message}>
            71
         </div>
      </a>
   )
}

export default Dialogs;