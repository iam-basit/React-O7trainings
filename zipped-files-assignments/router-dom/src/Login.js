import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const nav = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const loginform = (e) =>{
        e.preventDefault()
        if(email == "a@gmail.com" && password == "123")
        {
            nav("/welcome")
        }
        else{
            alert('Invalid Email or Password')
        }
    }
    return(
        <>
        <ol>
            <li>
                <a href={'/login'}>Login</a>
            </li>
            <li>
                <a href={'/register'}>Register</a>
            </li>
        </ol>
        <h1>Login</h1>
            <form onSubmit={loginform}>
                Email <input type="email" onChange={(e)=>{setEmail(e.target.value)}} required></input><br/>
                Password <input type="password" onChange={(e)=>{setPassword(e.target.value)}} required></input><br/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}