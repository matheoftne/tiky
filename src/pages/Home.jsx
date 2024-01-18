import  './Home.css';
import Top from '../components/Top/Top';
import { Component } from 'react';
import Loading from './Loading';
import { Fade } from 'react-awesome-reveal';
import Categories from '../components/Categories/Categories';
import AddFriends from '../components/AddFriends/AddFriends';
import MatchInComing from '../components/MatchInComing/MatchInComing';
import ResultatsMatchs from '../components/ResultatsMatchs/ResultatsMatchs';

class Home extends Component {
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
            
            <div className="Home">
                <Fade direction={"down"}>
                    <div id='topPart'>
                        <Top/>
                    </div>

                    <div id='midPart'>
                        <Fade delay={800}>
                            <Categories/>
                        </Fade>
                        <Fade delay={1000}>
                            <AddFriends/>
                        </Fade>
                        <Fade delay={1200}>
                            <MatchInComing/>
                        </Fade>
                        <Fade delay={2400}>
                            <ResultatsMatchs/>
                        </Fade>
                    </div>
                </Fade>
            </div>
        );
    }
}
export default Home;