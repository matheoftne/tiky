import './ResultatsMatchs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Resultat1 from './img/resultat1.png';
import Resultat2 from './img/resultat2.png';
import Resultat3 from './img/resultat3.png';

function ResultatsMatchs() {
    return (
        <div className="ResultatsMatchs">
            <div id="titleResultatsMatchs">
                <h2>Résultats des matchs</h2>
                <Link to="/replay" id='btnResultatsMatchs'>Voir <FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <Swiper
                slidesPerView={2}
                freeMode={true}
                spaceBetween={-150}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide><img id="resultat1" src={Resultat1} alt=''/></SwiperSlide>
                <SwiperSlide><img id="resultat2" src={Resultat2} alt=''/></SwiperSlide>
                <SwiperSlide><img id="resultat3" src={Resultat3} alt=''/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ResultatsMatchs;