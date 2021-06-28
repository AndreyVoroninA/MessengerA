import React from 'react';
import ChatFilter from '../chat-filter';
import Navigation from '../navigation';
import ChatList from '../chat-list';
import s from './Aside.module.scss';

const Aside = () => {
   return(
         <div className={s.aside}>
            <ChatFilter />
            <ChatList />
            <Navigation />
         </div>
   )
}

export default Aside;