/*
 * @Author: reason
 * @Date: 2020-08-03 20:26:50
 * @LastEditTime: 2020-09-01 18:25:46
 * @FilePath: /study-react/study-redux/src/store/index.js
 * @Descripttion: 
 */

 
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// 增强函数, 链式函数（执行一个函数后再执行一个函数）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
    reducer,
    enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;