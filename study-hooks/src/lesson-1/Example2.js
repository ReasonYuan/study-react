/*
 * @Author: reason
 * @Date: 2020-08-11 20:31:30
 * @LastEditTime: 2020-08-12 17:43:40
 * @FilePath: /study-react/study-hooks/src/lesson-1/Example2.js
 * @Descripttion: useState的介绍和多状态声明
 */
import React, { useState } from 'react';

let showGender = true;
function Example2() {
  // 多状态时，是通过useState的【顺序】来记录的
  const [age, setAge] = useState(18); // 数组解构
  const [gender, setGender] = useState('男'); // 数组解构
  // if (showGender) { // useState不能存在于条件语句中 ---------->
  //   const [gender, setGender] = useState('男'); // 数组解构
  //   showGender = false;
  // }
  const [work, setWork] = useState('FE'); // 数组解构

  return (
    <div>
      <p>今年：{age}岁</p>
      <p>性别：{gender}</p>
      <p>工作：{work}</p>
    </div>
  )
}

export default Example2;