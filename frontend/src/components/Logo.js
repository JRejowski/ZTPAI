import logo from '../img/logo.svg'
import '../css/logo.css'

function Logo(){

    return (
    <div className='logo'>
        <img src={logo}/>
        <h1>KYS</h1>
        <h2>Know your supplements</h2>
    </div>
    );
}

export default Logo;