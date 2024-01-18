import './FriendsRequests.css';
import { Component } from 'react';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import ppf1 from './img/ppf1.jpg';
import ppf2 from './img/ppf2.jpg';
import ppf3 from './img/ppf3.jpg';
import ppf4 from './img/ppf4.jpg';
import ppf5 from './img/ppf5.jpg';
import ppf6 from './img/ppf6.jpg';
import Top from '../components/Top/Top';

class FriendsRequests extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1500)
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <div className="FriendsRequests">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Top />
                        <input type="text" id="chercherAmis" placeholder="Rechercher quelqu'un" className='formInput'/>
                        <h1>Demandes d'amis</h1>
                    </div>

                    <div id="flexContainer">
                        <div id='midPartFriendsRequests'>
                            <div id="requestsContainer">
                                <div className="request">
                                    <div className="profilePic"><img className='ppfs' src={ppf1} alt="" /></div>
                                    <div className="nameIdContainer">
                                        <p className='nameId'>@jonathan78</p>
                                        <p className='timePlay'>Joueur depuis 2 mois</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnAccept'><FontAwesomeIcon icon={faCheck} /></Link>
                                        <Link className='btnDecline'><FontAwesomeIcon icon={faTrash} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='ppfs' src={ppf2} alt="" /></div>
                                    <div className="nameIdContainer">
                                        <p className='nameId'>@blandine49</p>
                                        <p className='timePlay'>Joueur depuis 4 mois</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnAccept'><FontAwesomeIcon icon={faCheck} /></Link>
                                        <Link className='btnDecline'><FontAwesomeIcon icon={faTrash} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='ppfs' src={ppf3} alt="" /></div>
                                    <div className="nameIdContainer">
                                        <p className='nameId'>@romanefloch</p>
                                        <p className='timePlay'>Joueur depuis 5 mois</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnAccept'><FontAwesomeIcon icon={faCheck} /></Link>
                                        <Link className='btnDecline'><FontAwesomeIcon icon={faTrash} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='ppfs' src={ppf4} alt="" /></div>
                                    <div className="nameIdContainer">
                                        <p className='nameId'>@nadiabriaud</p>
                                        <p className='timePlay'>Joueur depuis 10 mois</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnAccept'><FontAwesomeIcon icon={faCheck} /></Link>
                                        <Link className='btnDecline'><FontAwesomeIcon icon={faTrash} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='ppfs' src={ppf5} alt="" /></div>
                                    <div className="nameIdContainer">
                                        <p className='nameId'>@arthurmarie</p>
                                        <p className='timePlay'>Joueur depuis 5 mois</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnAccept'><FontAwesomeIcon icon={faCheck} /></Link>
                                        <Link className='btnDecline'><FontAwesomeIcon icon={faTrash} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='ppfs' src={ppf6} alt="" /></div>
                                    <div className="nameIdContainer">
                                        <p className='nameId'>@severineprime</p>
                                        <p className='timePlay'>Joueur depuis 5 mois</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnAccept'><FontAwesomeIcon icon={faCheck} /></Link>
                                        <Link className='btnDecline'><FontAwesomeIcon icon={faTrash} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default FriendsRequests;