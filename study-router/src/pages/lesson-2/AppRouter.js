/*
 * @Author: reason
 * @Date: 2020-08-08 14:02:45
 * @LastEditTime: 2020-08-08 14:10:14
 * @FilePath: /study-react/study-router/src/pages/lesson-2/AppRouter.js
 * @Descripttion: 
 */



import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Index'
import './index.css'


function AppRouter () {

  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li to="/">博客首页</li>
            <li to="">视频教程</li>
            <li to="">职场技能</li>
          </ul>
        </div>
        
        <div className="rightMain">
          <Route path="" exact component={Index} />
        </div>

      </div>
    </Router>
  )
}


export default AppRouter