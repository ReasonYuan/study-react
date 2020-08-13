/*
 * @Author: reason
 * @Date: 2020-08-12 18:43:08
 * @LastEditTime: 2020-08-13 19:00:37
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example5.js
 * @Descripttion: useContext (区别 -> useReducer: 解决状态共享的问题)
 * 解决父子组件间传值的问题
 */

import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext(); // 创建一个共享组件

// 子组件
function Counter() {
  let count = useContext(CountContext); // 接收值
  return <h2>{count}</h2>
}

export default function Example5() {
  const [count, setCount] = useState(0); // 数组解构

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

// export default Example3