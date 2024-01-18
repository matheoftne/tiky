import './CreateRoom.css';
import Top from '../components/Top/Top';
import { Component } from 'react';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CanalLogo from './img/canal.png';
import CanalMatchPreview from './img/canalmatchpreview.png';

class CreateRoom extends Component {
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
            <div className="CreateRoom">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Top/>
                    </div>

                    <div id="flexContainer">
                        <div id='midPartCreateRoom'>

                            <div id="createRoomName">
                                <h2>Donnez un nom à votre salon</h2>
                                <form>
                                    <input type="text" id="nom" placeholder="ex: l'équipe verte" className='formInput'/>
                                </form>
                            </div>

                            <div id="inviteFriends">
                                <h2>Inviter des amis</h2>
                                <span id='btnInviteFriends'></span>
                                <FontAwesomeIcon id='btnSpanInviteFriends' icon={faPlus} />
                            </div>

                            <div id="matchChoice">
                                <h2>Choix du match</h2>
                                <Link><div id='choixMatch'>
                                    <FontAwesomeIcon id='btnAddMatch' icon={faPlus} />
                                    <img id='CanalLogo' src={CanalLogo} alt="" />
                                    <img id='MatchPreview' src={CanalMatchPreview} alt="" />
                                </div></Link>
                            </div>

                            <div id="listingChoices">
                                <div id="left">
                                    <h3>Paris sur le match</h3>
                                    <h3>Jeux des décibelles</h3>
                                    <h3>Penaltys à la mi-temps</h3>
                                </div>

                                <div id='right'>
                                    <span className="activeChoiceContainer"><span id="activeChoice1"></span></span>
                                    <span className="activeChoiceContainer"><span id="activeChoice2"></span></span>
                                    <span className="activeChoiceContainer"><span id="activeChoice3"></span></span>
                                </div>
                            </div>

                            <div id="btnCreateRoom">
                                <Link to="/salon-id" type="submit" className='btnForm2'>Créer le salon</Link>
                            </div>
                        </div>

                    </div>


                    <div id="botPartCreateRoom">
                        <p>useless</p>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default CreateRoom;