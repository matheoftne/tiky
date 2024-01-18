import './AddFriends.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import pp1 from './img/pp1.png';
import pp3 from './img/pp3.png';
import pp4 from './img/pp4.png';
import pp5 from './img/pp5.png';
import pp6 from './img/pp6.png';
import { Link } from 'react-router-dom';

function AddFriends() {
    return (
        <div className="AddFriends">

            <div id="titleAddFriends">
                <h2>Ajouter des amis</h2>
                <Link to="/demandes-amis" id='btnAddFriends'>Voir <FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <Swiper
                slidesPerView={3}
                freeMode={true}
                spaceBetween={-120}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide><img id="pp1" src={pp1} alt=''/><span className="active"></span></SwiperSlide>
                <SwiperSlide><img id="pp3" src={pp3} alt=''/></SwiperSlide>
                <SwiperSlide><img id="pp4" src={pp4} alt=''/></SwiperSlide>
                <SwiperSlide><img id="pp5" src={pp5} alt=''/><span className="active"></span></SwiperSlide>
                <SwiperSlide><img id="pp6" src={pp6} alt=''/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AddFriends;