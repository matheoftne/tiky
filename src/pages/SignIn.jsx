import './SignIn.css';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo/Logo';
import { Fade } from 'react-awesome-reveal';
import { Component } from 'react';
import Loading from './Loading';

class SignIn extends Component {
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
            <div className="SignIn">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Logo/>
                    </div>
    
                    <div id='midPart'>
                        <h1>Se connecter</h1>
                        <form>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder='email@email.com' className='formInput'/>
                            <label htmlFor="password"></label>
                            <input type="password" id="password" placeholder='mot de passe' className='formInput'/>
                            <Link to="/accueil" type="submit" className='btnForm'>C'est parti</Link>
                        </form>
                    </div>
    
                    <div id="botPart">
                        <p>Pas encore inscrit ? </p>
                        <Link to="/inscription" id='linkBtn'>Inscription</Link>
                    </div>
                </Fade>
            </div>
        );
    }
}
export default SignIn;