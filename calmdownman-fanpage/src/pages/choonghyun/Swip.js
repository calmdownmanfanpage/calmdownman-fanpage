import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import users from './Users';

export default function Swip()  {
  return (

    
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
    
        
          <>
          {users.map((users)=>
          <SwiperSlide>
           <p><a href={users.First}>
           <img src={users.Last}alt =""></img></a></p>
           </SwiperSlide>
          )
    }
    </>
         
          
          
          
           
       

      </Swiper>
    </>
  );
}

