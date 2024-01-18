import './TopClient.css';
import Logo from '../Logo/Logo';
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TopClient() {
    return (
        <div className="TopClient">
            <Fade direction={"down"}>
                <div id='firstPart'>
                    <Link to="/accueil"><Logo/></Link>
                </div>

                <div id='secondPart'>
                    <Link className='faBtn faLight'><FontAwesomeIcon icon={faSun} /></Link>
                    <Link to="/demandes-amis" className='faBtn faLight'><FontAwesomeIcon icon={faUserPlus} /></Link>
                    <Link to="/creer-un-salon" className='faBtn '><FontAwesomeIcon icon={faPlus} /></Link>
                </div>
            </Fade>
        </div>
    );
}

export default TopClient;