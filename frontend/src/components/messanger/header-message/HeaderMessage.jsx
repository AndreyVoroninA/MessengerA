import React from 'react';
import s from './HeaderMessage.module.scss';
import notification from './../../../img/ringing.png';
import dots from './../../../img/free-more.png';
import user from './../../../img/free-user.png';

const HeaderMessage = () => {
   return(
      <div className={s.header}> 
            <div className={s.des}>
               <b className={s.name_dialog}>Название диалога</b>
               <div className={s.number}> Собеседники: {2}</div>
            </div>
            <div className={s.nav}>
               <input placeholder="Поиск сообщений"/>
               <img src={notification} />
               <img src={user} />
               <img src={dots} />
            </div>
         </div>
   )
}
export default HeaderMessage;
