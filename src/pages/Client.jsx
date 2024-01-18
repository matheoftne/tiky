import './Client.css';
import { Component } from 'react';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGear } from '@fortawesome/free-solid-svg-icons';
import pp2 from './img/pp2.png';
import TopClient from '../components/TopClient/TopClient';

class Client extends Component {
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
            <div className="Client">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <TopClient/>
                    </div>

                    <div id="flexContainer">
                        <div id='midPartClient'>
                            <div id="clientInfos">
                                <div id="profilePic">
                                    <FontAwesomeIcon id='faGear' icon={faGear} />
                                    <Link><img id='pp2' src={pp2} alt="" /></Link>
                                    <p className='nameAccount'>@allemand49</p>
                                </div>
                                <div className='stats'>
                                    <p>19</p>
                                    <p>amis</p>
                                </div>
                                <div className='stats'>
                                    <p>15</p>
                                    <p>victoires</p>
                                </div>
                                <div className='stats'>
                                    <p>15</p>
                                    <p>crédits</p>
                                </div>
                            </div>

                            <div id="abonnementSet">
                                <h2>Mon abonnement</h2>
                                <div id="btnsAbo">
                                    <Link className='btnAbo white'><h2>CANAL+</h2></Link>
                                    <Link className='btnAbo btnAddMore'><FontAwesomeIcon id='btnSpanAddAbo' icon={faPlus} /></Link>
                                </div>
                            </div>

                            <div id="listParam">
                                <h2>Paramètres</h2>
                                <Link to="/recompenses" className="btnParam">Rewards</Link>
                                <Link className="btnParam">Appareils</Link>
                                <Link className="btnParam">Notifications</Link>
                                <Link className="btnParam">Langues</Link>
                                <Link className="btnParam">Confidentialités</Link>
                                <Link className="btnParam">Affichage</Link>
                                <Link className="btnParam">Aide</Link>
                                <Link className="btnParam">A propos de Tiky</Link>
                            </div>

                            <div id='btnDisconnect'>
                                <Link to="/" className='btnForm2 btnRed'>Se déconnecter</Link>
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>
        );
    }
}

export default Client;