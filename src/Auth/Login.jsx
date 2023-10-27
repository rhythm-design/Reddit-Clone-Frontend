import { useNavigate, useSearchParams } from "react-router-dom"
import "./../css/Register.css"
import { useState } from "react"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()
    
    const postLoginRequest = async() => {

        const loginUser = {
            email : loginEmail, 
            password : loginPassword
        }

        await axios.post("http://localhost:8080/login", loginUser)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <main>

            <form>
                <div className="headings">
                    <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                    </img>
                    <h2> &nbsp; Login Reddit </h2>
                </div>
                
                <input type="email" name="email" onChange={(e)=>setLoginEmail(e.target.value)} placeholder="Email" />
                <input type="password" name="password" onChange={(e)=>setLoginPassword(e.target.value)}  placeholder="Password" />

                <button type="submit" onClick={(e) => { e.preventDefault(); postLoginRequest() }}> Login..</button>

                <span> Not a Registered User ?? <a onClick={()=>navigate("/register")}> Register </a></span>

            </form>
        </main>
    )
}

export default Login