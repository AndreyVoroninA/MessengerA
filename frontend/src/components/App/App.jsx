import React from 'react';
import Aside from '../aside';
import Messanger from '../messanger';
import s from './App.module.scss';

const App = () => {
   return(
      <div className={s.app}>
         <Aside />
         <Messanger />
      </div>
   )
}

export default App;