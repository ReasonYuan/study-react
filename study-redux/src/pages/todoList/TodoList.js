/*
 * @Author: reason
 * @Date: 2020-08-03 17:46:07
 * @LastEditTime: 2020-08-04 13:44:03
 * @FilePath: /study-react/study-redux/src/pages/todoList/TodoList.js
 * @Descripttion: 
 */
import React, { Component } from 'react';
import ToDoListUI from './TodoListUI'
import store from '../../store'
import { getTodoList, changeInputAction, addItemAction, deleteItemAction } from '../../store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange.bind(this))
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action)
  }

  render() {
    return (
      <ToDoListUI 
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        onAddClick={this.onAddClick}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
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