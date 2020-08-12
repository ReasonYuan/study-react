/*
 * @Author: reason
 * @Date: 2020-08-12 19:08:10
 * @LastEditTime: 2020-08-12 19:19:24
 * @FilePath: /study-react/study-hooks/src/lesson-1/example7/showArea.js
 * @Descripttion: 
 */

import React, { useContext } from 'react'
import { ColorContext } from './color'
 
export default function ShowArea() {
  const { color } = useContext(ColorContext);

  return (
    <div style={{color: color}}>字体颜色为{color}</div>
  )
}