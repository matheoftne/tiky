import './SignUp.css';
import Logo from '../components/Logo/Logo';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function SignUp() {
    return (
        <div className="SignUp">
            <Fade direction={"down"}>
                <div id='topPart'>
                    <Logo/>
                </div>

                <div id='midPart'>
                    <h1>S'inscrire</h1>
                    <img src="" alt="" />
                    <form>
                        <label htmlFor="text"></label>
                        <input type="text" id="username" placeholder='@username'/>
                        <label htmlFor="email"></label>
                        <input type="email" id="email" placeholder='email@email.com'></input>
                        <label htmlFor="password"></label>
                        <input type="password" id="password" placeholder='mot de passe'></input>
                        <label htmlFor="password"></label>
                        <input type="password" id='password' placeholder='répéter le mot de passe'/>
                        <Link to="/accueil" type="submit" className='btnForm'>C'est parti</Link>
                    </form>
                </div>

                <div id='botPartSignUp'>
                    <p>useless</p>
                </div>
            </Fade>
        </div>
    );
}

export default SignUp;