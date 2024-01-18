import './RoomJoin.css';
import Top from '../components/Top/Top';
import { Component } from 'react';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import AddFriends from '../components/AddFriends/AddFriends';
import RealMatch from './img/realmatch.png';
import pp3 from './img/pp3.png';
import pp4 from './img/pp4.png';
import pp5 from './img/pp5.png';

class RoomJoin extends Component {
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
            <div className="RoomJoin">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Top/>
                    </div>

                    <div id='midPart'>
                        <AddFriends/>

                        <div id="viewMatch">
                            <Link><div id='selectMatch'>
                                <FontAwesomeIcon id='btnWatchMatch' icon={faPlay} />
                                <img id='watchMatch' src={RealMatch} alt="" />
                            </div></Link>
                            <quote id="diffuseur">Diffusé par Canal + Sport</quote>
                        </div>

                        <div id="btnPlays">
                            <Link><button className='btnForm3 btnTogether' id='light'>Faire un pari</button></Link>
                            <Link to="/stream-id"><button className='btnForm3 btnTogether'>Rejoindre le salon</button></Link>
                        </div>

                        <div id="classement">
                            <h2>Classement</h2>
                            <div className='topContainer' id="top1">
                                <img id='pp3Top' src={pp3} alt="" />
                                <span className='rank'>1</span>
                                <p className='rankInfo'>Paul a 126 points</p>
                            </div>

                            <div className='topContainer' id="top2">
                                <img id='pp4Top' src={pp4} alt="" />
                                <span className='rank'>2</span>
                                <p className='rankInfo'>Nanou a 102 points</p>
                            </div>

                            <div className='topContainer' id="top3">
                                <img id='pp5Top' src={pp5} alt="" />
                                <span className='rank'>3</span>
                                <p className='rankInfo'>Ginola14 a 87 points</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default RoomJoin;