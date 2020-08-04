/*
 * @Author: reason
 * @Date: 2020-08-04 14:18:39
 * @LastEditTime: 2020-08-04 20:35:39
 * @FilePath: /study-react/study-react-redux/src/pages/TodoList/TodoList.js
 * @Descripttion: 
 */
import React, { Component } from 'react'
// import store from '../../store'

// 连接器
import { connect } from 'react-redux'


const TodoList = (props) => {
  let { inputValue, inputChange, onAddClick, list } = props;

    return (
      <div>
        <div>
          <input value={inputValue} onChange={inputChange} />
          <button onClick={onAddClick}>提交</button>
        </div>

        <ul>
          { 
            list.map((item, index) =>{
              return (<li key={index}>{item}</li>)
            })
          }
        </ul>
      </div>
    )
}

// class TodoList extends Component {
//   render() {
//     let { inputValue, inputChange, onAddClick, list } = this.props;

//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={inputChange} />
//           <button onClick={onAddClick}>提交</button>
//         </div>

//         <ul>
//           { 
//             list.map((item, index) =>{
//               return (<li key={index}>{item}</li>)
//             })
//           }
//         </ul>

//       </div>
//     )
//   }
// }

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      // const value = e.target.value;
      let action = {
        type: 'inputChange',
        value: e.target.value
      }
      dispatch(action)
    },
    onAddClick() {
      let action = { type: 'addItem' }
      dispatch(action)
    }
  }
}


export default connect(stateToProps, dispatchToProps)(TodoList);