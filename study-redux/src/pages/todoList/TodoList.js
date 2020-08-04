/*
 * @Author: reason
 * @Date: 2020-08-03 17:46:07
 * @LastEditTime: 2020-08-04 10:47:39
 * @FilePath: /study-react/study-redux/src/pages/todoList/TodoList.js
 * @Descripttion: 
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from '../../store'
import { changeInputAction, addItemAction, deleteItemAction } from '../../store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    store.subscribe(this.storeChange.bind(this))
  }
  render() {
    return (
      <div>
        <div style={{margin: '10px'}}>
          <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px' }} onChange={this.changeInputValue} value={this.state.inputValue}/>
          <Button type="primary" onClick={this.onAddClick.bind(this)}>增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List 
            bordered
            dataSource={ this.state.list }
            renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

  // 订阅store改变，老版本需要
  storeChange() {
    this.setState(store.getState())
  }

  changeInputValue(e){
    const val = e.target.value;
    const action = changeInputAction(val);
    store.dispatch(action);
  }

  onAddClick() {
    const action = addItemAction();
    store.dispatch(action)
  }

  deleteItem (index) {
    const action = deleteItemAction(index);
    store.dispatch(action)
  }

}


export default TodoList;