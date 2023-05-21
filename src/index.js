import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// react reduxtan gelen sağlayıcı
import { Provider } from 'react-redux';
// store çağırlır
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // provider yardımıyla storeda tutulan verileri aktarma
  <Provider store={store}>
    <App />
  </Provider>
);
