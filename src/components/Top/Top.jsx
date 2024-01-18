import './Top.css';
import Logo from '../Logo/Logo';
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import pp2 from './img/pp2.png';

function Top() {
    return (
        <div className="Top">
            <Fade direction={"down"}>
                <div id='firstPart'>
                    <Link to="/accueil"><Logo/></Link>
                </div>

                <div id='secondPart'>
                    <Link to="/saisir-code" className='faBtn'><FontAwesomeIcon icon={faShare} /></Link>
                    <Link to="/creer-un-salon" className='faBtn'><FontAwesomeIcon icon={faPlus} /></Link>
                    <div id='profilePic'>
                        <Link to="/client"><img id='pp2' src={pp2} alt="" /></Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Top;