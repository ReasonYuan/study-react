/*
 * @Author: reason
 * @Date: 2020-08-08 14:17:33
 * @LastEditTime: 2020-08-08 14:26:23
 * @FilePath: /study-react/study-router/src/pages/lesson-2/video.js
 * @Descripttion: 
 */

import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import Vue from './video/Vue'
import Flutter from './video/Flutter'
import ReactPage from './video/ReactPage'


function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage/">React教程</Link></li>
          <li><Link to="/video/flutter/">Flutter教程</Link></li>
          <li><Link to="/video/vue/">Vue教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/video/reactpage/" component={ReactPage} />
        <Route path="/video/flutter/" component={Flutter} />
        <Route path="/video/vue/" component={Vue} />
      </div>
    </div>
  )
}

export default Video;