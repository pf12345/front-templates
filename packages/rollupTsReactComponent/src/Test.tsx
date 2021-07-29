import React, { useState } from 'react';
import add from './util';
// import style from './style.module.css'

const Test = () => {
  const [value] = useState(1)
  return (
    <div>1122334 {add(value)}</div>
  )
}

export default Test;