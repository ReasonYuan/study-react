/*
 * @Author: reason
 * @Date: 2020-08-08 14:02:45
 * @LastEditTime: 2020-08-08 14:59:22
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

  // 动态路由
  const routerConfig = [
    {path: '/', title: '博客首页', exact: true, component: Index},
    {path: '/video', title: '视频教程', exact: false, component: Video},
    {path: '/workplace', title: '职场技能', exact: false, component: WorkPlace}
  ]


  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {/* 
              <li><Link to="/">博客首页</Link></li>
              <li><Link to="/video">视频教程</Link></li>
              <li><Link to="/workplace">职场技能</Link></li> 
            */}
            {
              routerConfig.map((item, index) => {
                return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
              })
            }
              

          </ul>
        </div>
        
        <div className="rightMain">
          {/*
            <Route path="/" exact component={Index} />
            <Route path="/video" component={Video} />
            <Route path="/workplace" component={WorkPlace} />
          */}
          {
            routerConfig.map((item, index) => {
              return (<Route path={item.path} exact={item.exact} component={item.component} />)
            })
          }
        </div>

      </div>
    </Router>
  )
}


export default AppRouter