/*
 * @Author: reason
 * @Date: 2020-08-12 18:43:08
 * @LastEditTime: 2020-08-20 18:47:16
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example6.js
 * @Descripttion: useReducer (和useContext一起使用，达到Redux的效果)
 * 此节讲基本使用方法
 */

// =============== Reducer ===============
// function countReducer(state, action) {
//   switch(action.type){
//     case 'add':
//       return state + 1;
//     case 'sub':
//       return state - 1;
//     default:
//       return state; 
//   }
// }

import React, { useState, useReducer } from 'react';

export default function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch(action){
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state; 
    }
  }, 0);

  return (
    <div>
      <h2>现在的分数是：{count}</h2>
      <button onClick={() => dispatch('add')}>Increment</button>
      <button onClick={() => dispatch('sub')}>Decrement</button>
    </div>
  )
}