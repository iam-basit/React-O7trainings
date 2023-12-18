import { useState } from 'react'
import './Counter.css'
export default function Counter() {
  const [x, setX] = useState(10)
  const inc = () => {
    setX(x + 1)
  }
  const [name, setName] = useState('janki')
  const changeName = (e) => {
    console.log('hello', e.target.value)
    setName(e.target.value)
  }
  const obj = {
    color: 'red',
    backgroundColor: 'yellow',
  }
  return (
    <>
      Counter Page
      <h1 style={obj}>The value of x is {x}</h1>
      <h1
        style={{
          color: 'pink',
          backgroundColor: 'green',
          border: '2px solid red',
        }}
      >
        This is style
      </h1>
      <button onClick={inc} className="my-btn">
        +++ {x}
      </button>
      <hr />
      <img
        src="/assets/images/dora.jpg"
        style={{ height: '200px', width: '200px' }}
      />
      <input value={name} onChange={changeName} id="input1" />
      {name}
    </>
  )
}
// export default Counter
