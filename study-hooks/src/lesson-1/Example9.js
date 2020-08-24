/*
 * @Author: reason
 * @Date: 2020-08-24 16:18:56
 * @LastEditTime: 2020-08-24 17:16:18
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example9.js
 * @Descripttion: useRef
 */

import React, { useRef, useState, useEffect } from 'react'

export default function Example10() {
  
  const inputEl = useRef(null)
  const [count, setCount] = useState(1)
  const [text, setText] = useState('hello')

  const _click = () => {
    setCount(count+1)
    inputEl.current.value = "DSB"
  };

  const textRef = useRef();

  useEffect(() => {
    textRef.current = text
    console.log('---------textRef:', textRef)
  },[text])

  return (
    <>
      <input ref={inputEl} />
      <button onClick={_click}>点一哈</button>
      <br />
      <br />
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  )
}