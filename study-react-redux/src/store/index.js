/*
 * @Author: reason
 * @Date: 2020-08-04 14:30:37
 * @LastEditTime: 2020-08-04 14:37:12
 * @FilePath: /study-react/study-react-redux/src/store/index.js
 * @Descripttion: 
 */
import { createStore } from 'redux'

import reducer from './reducer'

const store = createStore(reducer)


export default store;