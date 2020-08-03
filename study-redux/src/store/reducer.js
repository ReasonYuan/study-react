/*
 * @Author: reason
 * @Date: 2020-08-03 20:27:54
 * @LastEditTime: 2020-08-03 20:32:21
 * @FilePath: /study-react/study-redux/src/store/reducer.js
 * @Descripttion: 
 */

const defaultState = {
  inputValue: 'something',
  list: [ '吃早饭', '吃午饭', '吃晚饭' ]

};

export default (state = defaultState, action) => {

  return state
}