import { useState } from 'react'
import React from 'react'
import './CounterBtnStyle.css'

export default function CounterBtn() {
  let [num, setNum] = useState(10)
  const increment = () => {
    setNum(num + 1)
  }
  const decrement = () => {
    setNum(num - 1)
  }
  const styleObj = {
    backgroundColor: 'yellow',
    height: '200px',
    width: '200px',
    border: ' 5px solid red',
    borderRadius: '50%',
    boxShadow: ' 3px 3px rgb(96, 51, 51), -1em 0 .4em olive',
  }

  return (
    <>
      <div id="btn-div">
        <button onClick={increment}>+++</button>
        <h4>Value of Num is: {num}</h4>
        <button onClick={decrement}>---</button>
      </div>

      <div style={styleObj}>
        <h1
          style={{
            color: 'red',
            fontFamily: 'ui-rounded',
          }}
        >
          {num}
        </h1>
      </div>
    </>
  )
}
