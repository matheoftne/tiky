import './Loading.css';
import Logo from '../components/Logo/Logo';
import { Fade } from 'react-awesome-reveal';

function Loading() {
    return (
        <div className="Loading">
            <Fade direction='left'>
                <div id="logoLoading">
                    <Logo/>
                </div>
            </Fade>
        </div>
    );
}

export default Loading;