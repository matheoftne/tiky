import './WatchMatch.css';
import MatchStream from './img/watchmatch.png';
import { Component } from 'react';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import CanalLogo from './img/canal.png';
import BVB from './img/bvb.png';
import Bayern from './img/bayern.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import pp3 from './img/pp3.png';
import pp4 from './img/pp4.png';
import pp5 from './img/pp5.png';
import pp6 from './img/pp6.png';

class WatchMatch extends Component {
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
            <div className="WatchMatch">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <div id='topPartWatchMatch'>
                            <img id='watchStream' src={MatchStream} alt="" />
                            <img id='CanalLogo2' src={CanalLogo} alt="" />
                        </div>
                    </div>

                    <div id="midPartWatchMatch">
                        <div id="matchInfo">
                            <img className='club' id='BVB' src={BVB} alt="" />
                            <p id='matchScore'>0 - 4</p>
                            <img className='club' id='Baynern' src={Bayern} alt="" />
                        </div>
                    </div>

                    <div id="whosHere">
                        <div id="leftWhosHere">
                            <img className='ppStream' id='ppStream1' src={pp4} alt="" />
                            <img className='ppStream' id='ppStream2' src={pp5} alt="" />
                            <img className='ppStream' id='ppStream3' src={pp6} alt="" />
                            <img className='ppStream' id='ppStream4' src={pp3} alt="" />
                            <FontAwesomeIcon id='audioInfo' icon={faVolumeHigh} />
                        </div>

                        <div id="rightWhosHere">
                            <p id='infoWhosHere'>Connecté avec 4 autres personnes</p>
                        </div>

                    </div>
                    
                    <div id="btnChallenge">
                        <Link><button className='btnForm3 btnTogether'>Ouvrir les défis</button></Link>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default WatchMatch;
