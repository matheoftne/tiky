import './App.css';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import SaisirCode from './pages/SaisirCode';
import CreateRoom from './pages/CreateRoom';
import RoomJoin from './pages/RoomJoin';
import WatchMatch from './pages/WatchMatch';
import Client from './pages/Client';
import FriendsRequests from './pages/FriendsRequests';
import Rewards from './pages/Rewards';
import Replay from './pages/Replay';
import Loading from './pages/Loading';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/saisir-code" element={<SaisirCode />} />
        <Route path="/creer-un-salon" element={<CreateRoom />} />
        <Route path="/salon-id" element={<RoomJoin />} />
        <Route path="/stream-id" element={<WatchMatch />} />
        <Route path="/client" element={<Client />} />
        <Route path="/demandes-amis" element={<FriendsRequests />} />
        <Route path="/recompenses" element={<Rewards />} />
        <Route path="/replay" element={<Replay />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
