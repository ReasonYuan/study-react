/*
 * @Author: reason
 * @Date: 2020-08-03 17:46:07
 * @LastEditTime: 2020-08-03 20:35:02
 * @FilePath: /study-react/study-redux/src/pages/todoList/TodoList.js
 * @Descripttion: 
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from '../../store'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div style={{margin: '10px'}}>
          <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} />
          <Button type="primary">增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List 
            bordered
            dataSource={ this.state.list }
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}


export default TodoList;