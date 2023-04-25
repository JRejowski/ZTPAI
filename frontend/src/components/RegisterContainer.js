import '../css/loginregister.css'
import {Link} from "react-router-dom";

function RegisterContainer(){

    return (
        <div className="login-container">
            <form className="register" action="register">
                <input name="login" type="text" placeholder="login" required/>
                <input name="email" type="text" placeholder="email@email.com" required/>
                <input name="password" type="password" placeholder="password" required/>
                <input name="repeatPassword" type="password" placeholder="repeat password" required/>
                <button id="login" type="submit">REGISTER</button>
                <Link id="non-registered-button" to="/login">Already registered? Log in!</Link>
            </form>
        </div>
    )
}

export default RegisterContainer;