
import {Link} from "react-router-dom"
import { useState,UseContext } from "react"
import UserContext from "../../context/UserContext"

function Login  () {

const [username, setUsername] = useState("")
const [password, setPassword] = useState ("")
const {setUser} = UseContext(UserContext)
const handelSubmit=(e)=>{
    e.preventDefault()
    setUser ({username,password})
}
  return (
    <div>
          
    <h2>Login Page</h2>
    <input type="text"
    value={username} 
    onChange={(e)=>setUsername(e.target.value)}
    placeholder="username" />{" "}
    <input type="text"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder="password"/>  
    <Link to="/Login">
    <button onClick={handelSubmit}></button>   
      </Link> 
    </div>
  )
}

export default Login
