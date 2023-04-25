import '../css/loginregister.css'
import Logo from "../components/Logo";
import RegisterContainer from "../components/RegisterContainer";

function Register(){
    return (
        <div className="container">
            <Logo/>
            <RegisterContainer/>
        </div>
    );
}

export default Register