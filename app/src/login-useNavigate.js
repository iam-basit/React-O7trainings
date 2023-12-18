import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  const navigation = useNavigate('')

  const loginNavForm = (event) => {
    event.preventDefault()
    if (email == 'basit@gmail.com' && password == 'basit123') {
      navigation('/courses')
    } else {
      alert('Invalid Email or  Password')
    }
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={loginNavForm}>
        Email:
        <input
          type="email"
          onChange={(fun) => {
            setEmail(fun.target.value)
          }}
          required
        />
        <br />
        Password:
        <input
          type="Password"
          onChange={(fun) => {
            setPassword(fun.target.value)
          }}
          required
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}
