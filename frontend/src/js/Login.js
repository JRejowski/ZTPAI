import logo from '../img/logo.svg'
import '../css/loginregister.css'

function Login(){
    return (
        <div className="container">
            <div className="logo">
                <img src={logo}/>
                    <h1>KYS</h1>
                    <h2>Know your supplements</h2>
            </div>
            <div className="login-container">
                <form className="login" action="login">
                    <input name="email" type="text" placeholder="email@email.com"/>
                        <input name="password" type="password" placeholder="password"/>
                            <button id="login" type="submit">LOGIN</button>
                            <a id="non-registered-button">Not registered? Register now! </a>
                </form>
            </div>
        </div>
    );
}

export default Login