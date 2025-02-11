import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';  // Import your Redux store
import App from './App';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Wrap the app in Redux Provider */}
    <App />
  </Provider>
);
