import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/nav.css'
import logo from '../img/logo.svg'
import {Link} from "react-router-dom";
function Navigation() {
    return (
        <nav>
            <Link to="/home"><img src={logo}/></Link>
            <h3>KYS</h3>
            <ul>
            <li>
                <FontAwesomeIcon icon={faRankingStar} className="icon" />
                <Link className="button" to="/rankings">rankings</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faUser} className="icon" />
                <Link className="button" to="/profile">profile</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faCog} className="icon" />
                <Link className="button" to="/settings">settings</Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                <Link className="button" to="/login">logout</Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;