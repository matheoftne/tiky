import './Replay.css';
import resultat1 from './img/resultat1.png';
import resultat2 from './img/resultat2.png';
import resultat3 from './img/resultat3.png';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Component } from 'react';
import Loading from './Loading';
import Top from '../components/Top/Top';

class Replay extends Component {
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
            <div className="Replay">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Top />
                        <input type="text" id="chercherMatch" placeholder="Rechercher un match" className='formInput'/>
                        <input type="text" id="chercherDivision" placeholder="Choisir votre division" className='formInput'/>
                        
                    </div>

                    <div id="flexContainer">
                        <div id='midPartReplay'>
                            <div id="replayContainer">
                                <div className="replay1">
                                    <Link><div className="replay">
                                        <img className='match' src={resultat1} alt="" />
                                    </div></Link>
                                    <Link><div className="replay">
                                        <img className='match' src={resultat2} alt="" />
                                    </div></Link>
                                </div>
                                <div className="replay1">
                                    <Link><div className="replay">
                                        <img className='match' src={resultat1} alt="" />
                                    </div></Link>
                                    <Link><div className="replay">
                                        <img className='match' src={resultat2} alt="" />
                                    </div></Link>
                                </div>
                                <div className="replay1">
                                    <Link><div className="replay">
                                        <img className='match' src={resultat1} alt="" />
                                    </div></Link>
                                    <Link><div className="replay">
                                        <img className='match' src={resultat2} alt="" />
                                    </div></Link>
                                </div>
                                <div className="replay1">
                                    <Link><div className="replay">
                                        <img className='match' src={resultat1} alt="" />
                                    </div></Link>
                                    <Link><div className="replay">
                                        <img className='match' src={resultat3} alt="" />
                                    </div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Replay;