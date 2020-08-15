/*
 * @Author: reason
 * @Date: 2020-08-11 20:38:53
 * @LastEditTime: 2020-08-15 14:46:56
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example3.js
 * @Descripttion: useEffect讲解
 * 1. useEffect 等价于 componentDidMount、componentDidUpdate
 * 2. useEffect是异步的
 */
// ============== 老的写法 ==============
// import React, { Component } from 'react';

// class Example3 extends Component {

//   constructor (props) {
//     super(props)
//     this.state = { count: 0 }
//   }

//   componentDidMount() {
//     console.log(`componentDidMount => you clicked ${this.state.count} times`)
//   }

//   componentDidUpdate() {
//     console.log(`componentDidUpdate => you clicked ${this.state.count} times`)
//   }

//   addCount() {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render () {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.addCount.bind(this)}>Click me</button>
//       </div>
//     )
//   }
// }


// ============== Hooks ==============
import React, { useState, useEffect } from 'react';

function Example3() {
  const [count, setCount] = useState(0); // 数组解构

  useEffect(() => {
    console.log(`useEffect => you clicked ${count} times`)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}

export default Example3