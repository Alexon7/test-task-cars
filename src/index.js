import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { PersistGate } from 'redux-persist/integration/react';
import {  persistor, store } from '../src/redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
    <BrowserRouter basename="/test-task-cars">
    <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
     </React.StrictMode>
);


