import './Categories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import EnDirect from './img/enDirect.png';
import Replay from './img/replay.png';
import Amis from './img/amis.png';
import LigueProno from './img/ligueProno.png';
import { FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Categories() {
    return (

        <div className="Categories">
            
            <Swiper
                slidesPerView={3}
                freeMode={true}
                spaceBetween={-40}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide><Link to="/replay"><div id="Cat1"><img src={Replay} alt="Replay" /></div></Link></SwiperSlide>
                <SwiperSlide><Link to="/salon-id"><div id="Cat2"><img src={EnDirect} alt="En direct" /></div></Link></SwiperSlide>
                <SwiperSlide><Link><div id="Cat3"><img src={LigueProno} alt="Ligue prono" /></div></Link></SwiperSlide>
                <SwiperSlide><Link to="/demandes-amis"><div id="Cat4"><img src={Amis} alt="Amis" /></div></Link></SwiperSlide>
            </Swiper>
        </div>     
    );
}
export default Categories;