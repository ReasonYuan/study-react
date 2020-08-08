/*
 * @Author: reason
 * @Date: 2020-08-08 11:03:35
 * @LastEditTime: 2020-08-08 11:48:14
 * @FilePath: /study-react/study-router/src/pages/lesson-1/AppRouter.js
 * @Descripttion: 
 */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from './Index';
import List from './List';
import Home from './Home';

// 第1课：初步使用
// 第2课：页面组件和精确匹配（exact）
// 第3课：动态传值  => 四步凑： 设置规则  传递值  接受值  显示内容
// 第4课：动态传值实际运用
// 第5课：重定向（跳转页面）=> 两种方法：用标签跳转  代码跳转
// 第6课：嵌套路由

function AppRouter () {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/001">列表</Link></li> {/** 123是传的值 */}
      </ul>
      
      <Route path="/" exact component={Index} /> {/** exact: 精确匹配路径 */}
      <Route path="/list/:id" component={List} /> {/** exact: 精确匹配路径 */}
      <Route path="/home/" component={Home} />
    </Router>
  )
}

export default AppRouter