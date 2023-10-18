import React from 'react';
// import dummy from "./DB/Data.json"
// import { Swiper, SwiperSlide } from 'swiper/react';

function Webtoon() {
  return (
    <div>
      <p> <a href="https://comic.naver.com/webtoon/list?titleId=103759">
      <div> <img src="https://image-comic.pstatic.net/webtoon/103759/thumbnail/thumbnail_IMAG21_3546920286159910456.jpg" alt=""></img></div>
     
        </a></p>
    </div>
  );
}

export default Webtoon;


// const Webtoon = (props) => {
//     return (
//       <div>
//         <swiperSlide>
// 			{dummy.users.map(user => (
// 				<p key={user.userName}><a href={user.userName}>
//         <img src={user.name}></img>
//         </a></p>

// 			))}
//       </swiperSlide>
//       </div>
//     );
// };

// export default Webtoon;