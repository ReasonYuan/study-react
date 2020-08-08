/*
 * @Author: reason
 * @Date: 2020-08-08 10:58:20
 * @LastEditTime: 2020-08-08 11:15:09
 * @FilePath: /study-react/study-router/src/index.js
 * @Descripttion: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// ================ lesson 1 ================
import AppRouter from './pages/lesson-1/AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('root'));