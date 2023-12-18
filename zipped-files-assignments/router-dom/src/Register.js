import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const nav = useNavigate()

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
    nav('/login')
  }

  return (
    <>
      <ol>
        <li>
          <a href={'/login'}>Login</a>
        </li>
        <li>
          <a href={'/register'}>Register</a>
        </li>
      </ol>
      <h1>Register</h1>
      <form onSubmit={handlesubmit}>
        Name{' '}
        <input
          type="text"
          onChange={(evt) => {
            setName(evt.target.value)
          }}
          required
        />
        <br />
        Email{' '}
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <br />
        Password <input type="text" onChange={passw} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
