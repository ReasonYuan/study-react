/*
 * @Author: reason
 * @Date: 2020-08-04 14:31:41
 * @LastEditTime: 2020-09-30 18:14:11
 * @FilePath: /study-react/study-react-redux/src/store/reducer.js
 * @Descripttion: 
 */

const defaultState = {
  inputValue: 'sb',
  list: []
}

export default (state = defaultState, action) => {
  
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'inputChange') {
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === 'addItem') {
    newState.list.unshift(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  return state;
}