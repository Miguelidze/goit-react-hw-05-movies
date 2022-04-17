// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom';
// import App from './App';
// import 'modern-normalize/modern-normalize.css';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode >
//     <BrowserRouter >
//       <App/>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode >
    <BrowserRouter >
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
