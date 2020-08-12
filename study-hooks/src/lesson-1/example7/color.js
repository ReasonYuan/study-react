/*
 * @Author: reason
 * @Date: 2020-08-12 19:14:34
 * @LastEditTime: 2020-08-12 19:24:35
 * @FilePath: /study-react/study-hooks/src/lesson-1/example7/color.js
 * @Descripttion: 共享颜色状态
 */

import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return action.color;
    default: 
      return state;  
  }
}


export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue');

  return (
    <ColorContext.Provider value={{color, dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}

