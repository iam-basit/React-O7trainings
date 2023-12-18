import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
export default function RegisterForm() {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const navLogin = useNavigate()
  const navCourses = useNavigate()

  const passData = () => {
    alert(
      `
      Name: ${name}
      Email:  ${email}
      Password:  ${password}
  
      `,
    )
    navLogin('/login')
    navCourses('/courses')
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
        <li>
          <a href={'/courses'}>Course</a>
        </li>
      </ol>
      <h1>Register Form</h1>

      <form onSubmit={passData}>
        Name:
        <input
          type="text"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
          required
        />
        <br />
        Email:
        <input
          type="email"
          id="email"
          name="email"
          onChange={(fun) => {
            setEmail(fun.target.value)
          }}
          required
        />
        <br />
        Password:
        <input
          type="Password"
          id="pass"
          name="pass"
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
