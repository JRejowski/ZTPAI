import Logo from "../components/Logo";
import LoginContainer from "../components/LoginContainer";

import '../css/loginregister.css'

function Login(){
    return (
        <div className="container">
            <Logo/>
            <LoginContainer/>
        </div>
    );
}

export default Login