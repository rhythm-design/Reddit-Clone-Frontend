import { useNavigate } from "react-router-dom"
import "./../css/Header.css"

const Header = ({ showHeaderOptions }) => {
    const navigate = useNavigate()

    return (
        <header>
            <div className="headings" onClick={()=>navigate("/")}>
                <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                </img>
                <h2>  &nbsp; <i class="fa-brands fa-reddit"></i> reddit </h2>
            </div>

            <div className="headings">
                <a onClick={()=>navigate("/")}> <i class="fa-solid fa-house-chimney"></i> Home</a>
            </div>
            {console.log("showHeaderOptions ", showHeaderOptions)}
            {
                showHeaderOptions ?
                    <div className="searchSection">
                        <input type="text" placeholder="Search Reddit.." />
                        {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
                    </div>
                    : <span></span>
            }

            {
                showHeaderOptions ?
                    <ul className="headerOptions">
                        <li><i class="fa-solid fa-arrow-up-right-dots"></i></li>
                        <li><i class="fa-brands fa-rocketchat"></i></li>
                        <li><i class="fa-solid fa-plus"></i><i class="fa-brands fa-square-reddit"></i></li>
                       
                    </ul>
                    : <span></span>
            }

            {
                showHeaderOptions ?
                    <div className="loggedInUserSection">
                        <button onClick={() => navigate("/register")}>Register</button>
                        <button onClick={() => navigate("/login")}> <i class="fa-solid fa-right-to-bracket"></i> &nbsp; Login </button>
                    </div>
                    : <span></span>
            }

        </header>
    )
}

export default Header