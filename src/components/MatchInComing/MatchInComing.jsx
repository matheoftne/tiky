import './MatchInComing.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Match1 from './img/match1.png';
import Match2 from './img/match2.png';
import Match3 from './img/match3.png';

function MatchInComing() {
    return (
        <div className="MatchInComing">
            <div id="titleMatchInComing">
                <h2>Matchs à venir</h2>
                <Link id='btnMatchInComing'>Voir <FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <Swiper
                slidesPerView={2}
                freeMode={true}
                spaceBetween={-150}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide><img id="match1" src={Match1} alt=''/></SwiperSlide>
                <SwiperSlide><img id="match2" src={Match2} alt=''/></SwiperSlide>
                <SwiperSlide><img id="match3" src={Match3} alt=''/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MatchInComing;