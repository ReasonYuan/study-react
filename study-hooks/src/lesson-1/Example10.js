/*
 * @Author: reason
 * @Date: 2020-08-24 16:29:56
 * @LastEditTime: 2020-08-24 17:06:17
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example10.js
 * @Descripttion: 
 */

import React, { useRef, useReducer } from 'react'

export default function Example10() {
  
  const inputEl = useReducer(null)


  const _click = () => {
    inputEl.current.value = "DSB"
  };

  return (
    <>
      <input ref={inputEl} />
      <button onClick={_click}>点一哈</button>
    </>
  )
}