/*
 * @Author: reason
 * @Date: 2020-08-11 20:18:19
 * @LastEditTime: 2020-08-14 20:02:42
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example.js
 * @Descripttion: 示例
 */

// ============== 老的写法 ==============
// import React, { Component } from 'react';

// class Example extends Component {

//   constructor (props) {
//     super(props)
//     this.state = { count: 0 }
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
// 如何声明、如何读取、如何改变

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0); // 数组解构
  // const _useState = userState(0);
  // let count = _useState[0];
  // let setState = _useState[1];

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}


export default Example;