/*
 * @Author: reason
 * @Date: 2020-08-03 20:26:50
 * @LastEditTime: 2020-08-03 20:31:25
 * @FilePath: /study-react/study-redux/src/store/index.js
 * @Descripttion: 
 */
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer);

export default store;