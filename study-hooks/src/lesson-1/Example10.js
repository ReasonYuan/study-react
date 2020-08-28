/*
 * @Author: reason
 * @Date: 2020-08-24 16:29:56
 * @LastEditTime: 2020-08-28 20:33:42
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example10.js
 * @Descripttion: hooks函数
 */


 
import React, { useState, useEffect, useCallback } from 'react'

function useWinSize() {
  
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [])
  return size;
}

export default function Example10() {
  
  const size = useWinSize();

  return (
    <div>
      width:{size.width} height:{size.height}
    </div>
  )

}