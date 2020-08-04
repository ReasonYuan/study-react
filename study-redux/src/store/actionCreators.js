/*
 * @Author: reason
 * @Date: 2020-08-04 10:42:37
 * @LastEditTime: 2020-08-04 10:47:50
 * @FilePath: /study-react/study-redux/src/store/actionCreators.js
 * @Descripttion: 
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'


export const changeInputAction = (val) => {
  const action = {
      type: CHANGE_INPUT,
      value: val
    }
    return action
}

export const addItemAction = () => ({ type: ADD_ITEM })

export const deleteItemAction = (index) => ({ type: DELETE_ITEM, index })