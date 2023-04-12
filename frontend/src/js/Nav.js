import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/nav.css'
import logo from '../img/logo.svg'
function Navigation() {
    return (
        <nav>
            <img src={logo}/>
                <h3>KYS</h3>
            <ul>
            <li>
                <FontAwesomeIcon icon={faRankingStar} className="icon" />
                <a className="button">rankings</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faUser} className="icon" />
                <a className="button">profile</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faCog} className="icon" />
                <a className="button">settings</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                <a className="button">logout</a>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;