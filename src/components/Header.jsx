import { useNavigate } from "react-router-dom"
import "./../css/Header.css"

const Header = () => {
    const navigate = useNavigate()

    return (
        <header>
            <div className="headings">
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                </img>
                <h2> &nbsp; reddit </h2>
            </div>
            
            <div className="headings">
                Home
            </div>

            <div className="searchSection">
                <input type="text" placeholder="Search Reddit."/>
            </div>

            <ul className="headerOptions">
                <li>Popular</li>
                <li>Chat</li>
                <li>Create</li>
            </ul>

            <div className="loggedInUserSection">
                <button onClick={() => navigate("/register")}>Register</button>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>

        </header>
    )   
}

export default Header