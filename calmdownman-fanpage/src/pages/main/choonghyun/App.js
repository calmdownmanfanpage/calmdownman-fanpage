import React, { useRef,useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'
import './styles.css'
import {EffectCoverflow, Pagination}from "swiper/modules";

export default function App(){
    return(
        <>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate : 50,
            stretch : 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={ture}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >

            <SwiperSlide><img src="./choonghyun/img/ham.png"/></SwiperSlide>

            
        </Swiper>
        </>


    ); 
};