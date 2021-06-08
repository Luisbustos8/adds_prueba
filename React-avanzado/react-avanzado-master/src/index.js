import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

import storage from './utils/storage';
import { configureClient } from './api/client';
import  configureStore  from './store';
import Root from './Root';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({ preloadState : { auth: !!accessToken} });

const render = () => {
  ReactDOM.render(<Root store={store} />,
      document.getElementById('root')
    );
}

render();
