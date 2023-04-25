import '../css/loginregister.css'
import {Link} from "react-router-dom";

function LoginContainer(){

    return (
        <div className="login-container">
        <form className="login" action="login">
            <input name="email" type="text" placeholder="email@email.com"/>
            <input name="password" type="password" placeholder="password"/>
            <button id="login" type="submit">LOGIN</button>
            <Link id="non-registered-button" to="/register">Not registered? Register now! </Link>
        </form>
    </div>
    )
}

export default LoginContainer;