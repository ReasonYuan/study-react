/*
 * @Author: reason
 * @Date: 2020-08-03 20:27:54
 * @LastEditTime: 2020-08-04 13:44:33
 * @FilePath: /study-react/study-redux/src/store/reducer.js
 * @Descripttion: 
 */

/**
 * Reducer里只能接收state,不能改变state
 * Reducer必须是纯函数
 * 
 * 
 */

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

const defaultState = {
  inputValue: 'something',
  list: [ ]

};
// Reducer里只能接收state,不能改变state
export default (state = defaultState, action) => {
  let newState = state;
  // let newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT){
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    newState.list.unshift(newState.inputValue);
    newState.inputValue = "";
    return newState
  }

  if (action.type === DELETE_ITEM) {
    newState.list.splice(action.index, 1);
    return newState
  }

  if (action.type === GET_LIST ) {
    newState.list = action.data;
    return newState
  }

  return state
}