import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from '@reduxjs/toolkit';
import habitReducer from './habitchart/redux/habitReducer';
import ChartApp from './habitchart/chartApp';

const chartStore = createStore(habitReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={chartStore}>
      <ChartApp/>
    </Provider>
  </React.StrictMode>
);

export default chartStore;

reportWebVitals();
