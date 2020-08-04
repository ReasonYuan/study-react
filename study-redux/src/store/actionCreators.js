/*
 * @Author: reason
 * @Date: 2020-08-04 10:42:37
 * @LastEditTime: 2020-08-04 13:46:40
 * @FilePath: /study-react/study-redux/src/store/actionCreators.js
 * @Descripttion: 
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'


export const changeInputAction = (val) => {
  const action = {
      type: CHANGE_INPUT,
      value: val
    }
    return action
}

export const addItemAction = () => ({ type: ADD_ITEM })

export const deleteItemAction = (index) => ({ type: DELETE_ITEM, index })

export const getListAction = (data) => ({ type: GET_LIST, data })

export const getTodoList = () => {
  return (dispatch) => {
    setTimeout(() => {
      const list = ['吃早饭', '吃午饭' ,'吃晚饭']
      const action = getListAction(list);
      dispatch(action)
    }, 200)
  }
}