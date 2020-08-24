/*
 * @Author: reason
 * @Date: 2020-08-24 15:50:39
 * @LastEditTime: 2020-08-24 16:15:18
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example8.js
 * @Descripttion: useMemo
 */
import React, { useState, useMemo } from 'react'


export default function Example8 () {
  const [buleCount, setBuleCount] = useState(0);
  const [redCount, setRedCount] = useState(0);

  return (
    <div>
      <button onClick={()=>setBuleCount(buleCount+1)}>蓝色</button>
      <button onClick={()=>setRedCount(redCount+1)}>红色</button>
      <Child buleCount={buleCount} redCount={redCount}></Child>
    </div>
  )
}


function Child({buleCount, redCount}) {
  
  const onBuleChange = () => {
    console.log('------->onBlueChange~~')
    return buleCount
  }

  // const bl = onBuleChange();
  const bl = useMemo(() => onBuleChange(), [buleCount])

  return (
    <div>
      <div>蓝色count: {bl}</div>
      <div>蓝色count: {redCount}</div>
    </div>
  )
}



