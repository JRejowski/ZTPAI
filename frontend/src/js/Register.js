import logo from '../img/logo.svg'
import '../css/loginregister.css'

function Register(){
    return (
        <div className="container">
            <div className="logo">
                <img src={logo}/>
                    <h1>KYS</h1>
                    <h2>Know your supplements</h2>
            </div>
            <div className="login-container">
                <form className="register" action="register">
                    <input name="login" type="text" placeholder="login" required/>
                    <input name="email" type="text" placeholder="email@email.com" required/>
                        <input name="password" type="password" placeholder="password" required/>
                            <input name="repeatPassword" type="password" placeholder="repeat password" required/>
                                <button id="login" type="submit">REGISTER</button>
                                <a id="non-registered-button">Already registered? Log in!</a>
                </form>
            </div>

        </div>
    );
}

export default Register