import "./../css/Register.css"

const Login = () => {
    return (
        <main>

            <form>
                <div className="headings">
                    <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo">
                    </img>
                    <h2> &nbsp; Login Reddit </h2>
                </div>
                
                
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button type="submit"> Login..</button>

            </form>
        </main>
    )
}

export default Login