/*
 * @Author: reason
 * @Date: 2020-08-08 14:02:45
 * @LastEditTime: 2020-08-08 14:48:53
 * @FilePath: /study-react/study-router/src/pages/lesson-2/AppRouter.js
 * @Descripttion: 
 */



import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Index'
import Video from './Video'
import WorkPlace from './WorkPlace'
import './index.css'


function AppRouter () {

  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video">视频教程</Link></li>
            <li><Link to="/workplace">职场技能</Link></li>
          </ul>
        </div>
        
        <div className="rightMain">
          <Route path="/" exact component={Index} />
          <Route path="/video" component={Video} />
          <Route path="/workplace" component={WorkPlace} />
        </div>

      </div>
    </Router>
  )
}


export default AppRouter