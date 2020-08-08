/*
 * @Author: reason
 * @Date: 2020-08-08 11:10:08
 * @LastEditTime: 2020-08-08 11:47:45
 * @FilePath: /study-react/study-router/src/pages/lesson-1/index.js
 * @Descripttion: 
 */

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [
        {cid: 123, title: '个人博客1'},
        {cid: 456, title: '个人博客2'},
        {cid: 789, title: '个人博客3'}
      ]
    }

    // this.props.history.push('/home/') // 代码重定向
  }

  render () {
    return (
      <div>
        {/* 标签重定向 */}
        <Redirect to="/home/"/>
        <h2>Hello World</h2>
        <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to={'/list/'+item.cid}>{item.title}</Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


export default Index;