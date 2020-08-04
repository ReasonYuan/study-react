/*
 * @Author: reason
 * @Date: 2020-08-04 10:57:44
 * @LastEditTime: 2020-08-04 11:14:39
 * @FilePath: /study-react/study-redux/src/pages/todoList/TodoListUI.js
 * @Descripttion: 
 */
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Input, Button, List } from 'antd'

export default class TodoList extends Component {

  render() {
    return (
      <div>
        <div style={{margin: '10px'}}>
          <Input placeholder={this.props.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={this.props.changeInputValue} value={this.props.inputValue}/>
          <Button type="primary" onClick={this.props.onAddClick.bind(this)}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List 
            bordered
            dataSource={ this.props.list }
            renderItem={(item, index) => (<List.Item onClick={()=>this.props.deleteItem(index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
  
}