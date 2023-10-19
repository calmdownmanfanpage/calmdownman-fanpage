import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';

import Webtoon from './Webtoon';
import Webtoon2 from './Webtoon2';
import Webtoon3 from './Webtoon3';
import Webtoon4 from './Webtoon4';
import Webtoon5 from './Webtoon5';


export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
    

        <SwiperSlide><Webtoon/></SwiperSlide>
        <SwiperSlide><Webtoon2/></SwiperSlide>
        <SwiperSlide><Webtoon3/></SwiperSlide>
        <SwiperSlide><Webtoon4/></SwiperSlide>
        <SwiperSlide><Webtoon5/></SwiperSlide>


      </Swiper>
    </>
  );
}

