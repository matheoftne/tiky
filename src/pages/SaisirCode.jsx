import './SaisirCode.css';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo/Logo';
import { Fade } from 'react-awesome-reveal';
import { Component } from 'react';
import Loading from './Loading';

class SaisirCode extends Component {
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
            <div className="SaisirCode">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Logo/>
                    </div>
    
                    <div id='midPart'>
                        <h1>Saisir le code</h1>
                        <form>
                            <label htmlFor="code"></label>
                            <input type="text" id="code" placeholder='code' className='formInput'/>
                            <Link to="/salon-id" type="submit" className='btnForm'>C'est parti</Link>
                        </form>
                    </div>
    
                    <div id="botPartSaisirCode">
                        <p>useless</p>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default SaisirCode;