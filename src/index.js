import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  < React.StrictMode basename = "/goit-react-hw-05-movies/">
    <BrowserRouter >
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
