import React from 'react';
import s from './Navigation.module.scss';
import settings from '../../img/settings.png';
import profile from '../../img/profile.png';
import new_friends from './../../img/friends.png';

const Navigation = () => {
   return(
      <div className={s.header}>
         <nav className={s.nav}>
            <ul className={s.ul}>
               <li className={s.item}><a href="#profile">
                  <img src={profile}/>
                  <div>Профиль</div></a>
               </li>
               <li className={s.item}><a href="#friends">
                  <img src={new_friends}/>
                  <div>Контакты</div></a></li>
               <li className={s.item}><a href="#settings">
                  <img src={settings}/>
                  <div>Настройки</div></a>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navigation;