/*
 * @Author: reason
 * @Date: 2020-08-03 20:26:50
 * @LastEditTime: 2020-08-04 10:03:13
 * @FilePath: /study-react/study-redux/src/store/index.js
 * @Descripttion: 
 */
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;