/*
 * @Author: reason
 * @Date: 2020-08-08 14:44:41
 * @LastEditTime: 2020-08-22 17:35:15
 * @FilePath: /study-react/study-router/src/pages/lesson-2/WorkPlace.js
 * @Descripttion: 
 */

 
import React from 'react'
import { Route, Link } from 'react-router-dom'

import GetUp from './workplace/GetUp'
import Money from './workplace/Money'

function WorkPlace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money/">赚钱攻略</Link></li>
          <li><Link to="/workplace/getup/">早起教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>职场技能</h3></div>
        <Route path="/workplace/money/" component={Money} />
        <Route path="/workplace/getup/" component={GetUp} />
      </div>
    </div>
  )
}

export default WorkPlace;