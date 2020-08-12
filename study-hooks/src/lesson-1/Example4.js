/*
 * @Author: reason
 * @Date: 2020-08-11 20:38:53
 * @LastEditTime: 2020-08-12 18:41:08
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example4.js
 * @Descripttion: useEffect实现componentWillUnmount (解绑=>return 匿名方法)
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  useEffect(() => {
    console.log('useEffect => in 首页...')
    return () => { console.log('-----> out Index!!!'); }
  }, [])

  return <h2>Index.com</h2>
}

function List() {
  useEffect(() => {
    console.log('useEffect => in 列表...')
  })
  return <h2>list Page</h2>
}

function Example3() {
  const [count, setCount] = useState(0); // 数组解构

  useEffect(() => {
    console.log(`useEffect => you clicked ${count} times`)
    return ()=> console.log('==================')
  },[count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}

export default Example3