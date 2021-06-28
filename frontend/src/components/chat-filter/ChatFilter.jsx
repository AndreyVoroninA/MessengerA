import React from 'react';
import s from './ChatFilter.module.scss';

const ChatFilter = () => {
   return(
      <div className={s.filter}>
            <ul className={s.ul}>
               <li><a href="#">Все</a></li>
               <li><a href="#">Непрочитанные</a></li>
               <li><a href="#">Важные</a></li>
            </ul>
         <input className={s.find} placeholder="Поиск диалогов"/>
      </div>
   )
}

export default ChatFilter;