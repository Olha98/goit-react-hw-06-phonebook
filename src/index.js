import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Form/Form';
import { Provider } from 'react-redux'
import './style.css'
import store from './Redux/store';



ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);


