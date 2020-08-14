/*
 * @Author: reason
 * @Date: 2020-08-12 19:11:03
 * @LastEditTime: 2020-08-14 19:39:17
 * @FilePath: /study-react/study-hooks/src/lesson-1/example7/Example7.js
 * @Descripttion: useReducer和useContext一起使用，达到Redux的效果
 * useCount : 可以管理全局状态，避免一层层传递 （共享业务状态）
 * useReducer: 传递action, 可以更新复杂逻辑状态 （控制业务逻辑）
 */

import React from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './color'

export default function Example7 () {

  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  )
}