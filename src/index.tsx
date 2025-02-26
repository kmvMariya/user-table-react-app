import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}