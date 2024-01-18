import './Rewards.css';
import { Component } from 'react';
import Top from '../components/Top/Top';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Adidas from './img/adidas.png';
import Paypal from './img/paypal.png';
import Amazon from './img/amazon.png';
import KK from './img/kk.png';
import Footlocker from './img/footlocker.png';
import Bitcoin from './img/bitcoin.png';

class Rewards extends Component {
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
            <div className="Rewards">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Top />
                        <input type="text" id="chercherRewards" placeholder="Rechercher une récompense" className='formInput'/>
                        <div id="rewardsInfos">
                            <h1>Récompenses disponibles</h1>
                            <p>Solde: 978 crédits</p>
                        </div>
                    </div>

                    <div id="flexContainer">
                        <div id='midPartFriendsRequests'>
                            <div id="requestsContainer">
                                <div className="request">
                                    <div className="profilePic"><img className='marques' src={Amazon} alt="" /></div>
                                    <div className="priceRewardContainer">
                                        <p className='priceReward'>50 euros en carte cadeau</p>
                                        <p className='creditsPrice'>500 crédits</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnShop'><FontAwesomeIcon icon={faCartShopping} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='marques' src={Footlocker} alt="" /></div>
                                    <div className="priceRewardContainer">
                                        <p className='priceReward'>50 euros en carte cadeau</p>
                                        <p className='creditsPrice'>500 crédits</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnShop'><FontAwesomeIcon icon={faCartShopping} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='marques' src={Adidas} alt="" /></div>
                                    <div className="priceRewardContainer">
                                        <p className='priceReward'>50 euros en carte cadeau</p>
                                        <p className='creditsPrice'>500 crédits</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnShop'><FontAwesomeIcon icon={faCartShopping} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='marques' src={Paypal} alt="" /></div>
                                    <div className="priceRewardContainer">
                                        <p className='priceReward'>50 euros en carte cadeau</p>
                                        <p className='creditsPrice'>500 crédits</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnShop'><FontAwesomeIcon icon={faCartShopping} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='marques' src={Bitcoin} alt="" /></div>
                                    <div className="priceRewardContainer">
                                        <p className='priceReward'>50 euros en carte cadeau</p>
                                        <p className='creditsPrice'>500 crédits</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnShop'><FontAwesomeIcon icon={faCartShopping} /></Link>
                                    </div>
                                </div>
                                <div className="request">
                                    <div className="profilePic"><img className='marques' src={KK} alt="" /></div>
                                    <div className="priceRewardContainer">
                                        <p className='priceReward'>50 euros en carte cadeau</p>
                                        <p className='creditsPrice'>500 crédits</p>
                                    </div>
                                    <div className="btns">
                                        <Link className='btnShop'><FontAwesomeIcon icon={faCartShopping} /></Link>
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

export default Rewards;