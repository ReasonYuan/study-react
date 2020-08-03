/*
 * @Author: reason
 * @Date: 2020-08-03 17:30:16
 * @LastEditTime: 2020-08-03 17:51:50
 * @FilePath: /study-react/study-redux/src/index.js
 * @Descripttion: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoList from './pages/todoList/TodoList';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


ReactDOM.render(<TodoList />, document.getElementById('root'));



