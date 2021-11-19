import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storage from '../src/components/Utils/storage';
import { configureClient } from './api/client';


const auth = storage.get('access');
configureClient({ auth });

console.log(auth)

ReactDOM.render(
  <BrowserRouter>
    <App isInitiallyLogged={!!auth} />
  </BrowserRouter>
  ,document.getElementById('root')
);


reportWebVitals();
