import React, { Component } from 'react';
import add from './util';
import style from './style.module.css'

class Test extends Component {
  render() {
    return (
      <div className={style.title}>component {add(1)}</div>
    )
  }
}

export default Test;