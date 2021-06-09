//TECH used
//React + React hooks
//React context API -> REDUX pattern
//Material UI
//Flexbox
//Firebase Hosting
//Firebase's firestone realtime DB
//Firebase Google Authentication
//React flip move

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css'
import {StateProvider} from './StateProvider';
import reducer, {initialState} from './reducer';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
