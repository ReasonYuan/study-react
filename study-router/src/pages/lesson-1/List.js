/*
 * @Author: reason
 * @Date: 2020-08-08 11:11:52
 * @LastEditTime: 2020-08-08 11:39:47
 * @FilePath: /study-react/study-router/src/pages/lesson-1/List.js
 * @Descripttion: 
 */

import React, { Component } from 'react'

class List extends Component {

  constructor (props) {
    super(props);
    this.state = { };
  }

  componentDidMount () {
    const tempId = this.props.match.params.id;
    console.log('------id：', tempId)
    this.setState({ id: tempId })
  }

  render () {
    return (
      <h2>List-Page id：{this.state.id}</h2>
    )
  }
}


export default List;