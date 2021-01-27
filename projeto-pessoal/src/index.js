import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import storeConfig from './store/storeConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <Provider store={storeConfig()}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

/*if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
};*/