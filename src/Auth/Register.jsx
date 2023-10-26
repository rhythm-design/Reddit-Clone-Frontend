import "./../css/Register.css"

const Register = () => {
    return (
        <main>

            <form>
                <div className="headings">
                    <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                    </img>
                    <h2> &nbsp; Register Reddit </h2>
                </div>
                
                
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <button type="submit"> Register..</button>

            </form>
        </main>
    )
}

export default Register