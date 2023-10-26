import { useNavigate } from "react-router-dom"
import "./../css/Register.css"

import axios from 'axios'
import {useState} from "react";

const Register = () => {
    const navigate = useNavigate()

    const [inputUser, setInputUser] = useState({})

    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")


    const getRequestServer = async (e) => {
        e.preventDefault()
        console.log('get request to get the model')
        await axios.get("http://localhost:8080/register").then((res)=>{console.log(res.data)
            setInputUser(res.data)})
            .catch((err)=>console.log(err))



        inputUser.email = email
        inputUser.password = password
        inputUser.username = username

        console.log("post request to send register user details ",inputUser)

        console.log("***********************")

        await  axios.post("http://localhost:8080/register", inputUser).then((res)=>console.log(res))
            .catch((err)=>console.log(err))

    }

    return (
        <main>

            <form>
                <div className="headings">
                    <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                    </img>
                    <h2> &nbsp; Register Reddit </h2>
                </div>
                
                
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}  placeholder="Username" />
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />

                <button type="submit" onClick={(e) => getRequestServer(e)}> Register..</button>

                <span> Already a Registered User ??  <a onClick={()=>navigate("/login")}> Login </a></span>

            </form>
        </main>
    )
}

export default Register