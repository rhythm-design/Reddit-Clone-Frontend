import { useNavigate } from "react-router-dom"
import "./../css/Header.css"

const Header = ({ showHeaderOptions }) => {
    const navigate = useNavigate()

    return (
        <header>
            <div className="headings" onClick={()=>navigate("/")}>
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                </img>
                <h2>  &nbsp; <i className="fa-brands fa-reddit"></i> reddit </h2>
            </div>

            <div className="headings">
                <a onClick={()=>navigate("/")}> <i className="fa-solid fa-house-chimney"></i> Home</a>
            </div>
            {console.log("showHeaderOptions ", showHeaderOptions)}
            {
                showHeaderOptions ?
                    <div className="searchSection">
                        <input type="text" placeholder="Search Reddit.." />
                        {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
                    </div>
                    : <span></span>
            }

            {
                showHeaderOptions ?
                    <ul className="headerOptions">
                        <li><i className="fa-solid fa-arrow-up-right-dots"></i></li>
                        <li><i className="fa-brands fa-rocketchat"></i></li>
                        <li><i className="fa-solid fa-plus"></i><i className="fa-brands fa-square-reddit"></i></li>
                       
                    </ul>
                    : <span></span>
            }

            {
                showHeaderOptions ?
                    <div className="loggedInUserSection">
                        <button onClick={() => navigate("/register")}>Register</button>
                        <button onClick={() => navigate("/login")}> <i className="fa-solid fa-right-to-bracket"></i> &nbsp; Login </button>
                    </div>
                    : <span></span>
            }

        </header>
    )
}

export default Header