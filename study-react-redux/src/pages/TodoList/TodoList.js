/*
 * @Author: reason
 * @Date: 2020-08-04 14:18:39
 * @LastEditTime: 2020-08-04 14:47:31
 * @FilePath: /study-react/study-react-redux/src/pages/TodoList/TodoList.js
 * @Descripttion: 
 */
import React, { Component } from 'react'
// import store from '../../store'

// 连接器
import { connect } from 'react-redux'


class TodoList extends Component {

  constructor(props) {
    super(props)
    // this.state = store.getState();
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue}/>
          <button>提交</button>
        </div>

        <ul>
          <li>sbb</li>
        </ul>

      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}


export default connect(stateToProps, null)(TodoList);