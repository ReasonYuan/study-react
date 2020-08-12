/*
 * @Author: reason
 * @Date: 2020-08-12 19:09:36
 * @LastEditTime: 2020-08-12 19:27:02
 * @FilePath: /study-react/study-hooks/src/lesson-1/example7/Buttons.js
 * @Descripttion: 
 */


import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './color'

export default function Buttons () {

  const { dispatch } = useContext(ColorContext);

  return (
    <div>
      <button onClick={()=>dispatch({type: UPDATE_COLOR, color: 'red'})}>红色</button>
      <button onClick={()=>dispatch({type: UPDATE_COLOR, color: 'yellow'})}>黄色</button>
    </div>
  )
}