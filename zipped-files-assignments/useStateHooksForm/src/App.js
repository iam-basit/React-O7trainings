import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('')

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  // console.log(name)
  let passw = (data) => {
    // console.log(data)
    setPassword(data.target.value)
  }

  const handlesubmit = () => {
    alert(name)
    alert(email)
    alert(password)
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        Name{' '}
        <input
          type="text"
          onChange={(evt) => {
            // console.log(evt)
            setName(evt.target.value)
          }}
        />
        <br />
        Email{' '}
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br />
        Password <input type="text" onChange={passw} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
