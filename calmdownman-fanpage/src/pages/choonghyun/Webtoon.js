import React from 'react';
// import dummy from "./DB/Data.json"
// import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'

// function Webtoon() { Previous ver.
//   return (
//     <div>
//       <p> <a href="https://comic.naver.com/webtoon/list?titleId=103759">
//       <div> <img src="https://image-comic.pstatic.net/webtoon/103759/thumbnail/thumbnail_IMAG21_3546920286159910456.jpg" alt=""></img></div>
     
//         </a></p>
//     </div>
//   );
// }

// export default Webtoon;

// function Webtoon() { 
//   return (
//     <>
//       <p> <Link to="https://comic.naver.com/webtoon/list?titleId=103759">
//        <img src="https://image-comic.pstatic.net/webtoon/103759/thumbnail/thumbnail_IMAG21_3546920286159910456.jpg" ></img></Link></p>

      
     
//         </>
   
//   );
// }

// export default Webtoon;

function Webtoon() { 
  return (
    <>
      <p> <Link to="https://comic.naver.com/webtoon/list?titleId=103759">
       <img src="https://image-comic.pstatic.net/webtoon/103759/thumbnail/thumbnail_IMAG21_3546920286159910456.jpg" ></img></Link></p>

      
     
        </>
   
  );
}

export default Webtoon;



// const users = [
//   {First : "https://comic.naver.com/webtoon/list?titleId=103759", Last: "https://image-comic.pstatic.net/webtoon/103759/thumbnail/thumbnail_IMAG21_3546920286159910456.jpg"},
//   {First: "Daniel", Last: "Longbottom"},
//   {First : "Jacob", Last: "Black"},
//   {First: "Daniel", Last: "Longbottom"},
//   {First : "Jacob", Last: "Black"},
// ];
// 2번부터 주소 다시 입력해서 맵함수 시도하기

// const Address = users.map(function(element){
//     return (`
//     <>
//       <p> <Link to= ${element.First}>
//       <img src= ${element.Last} alt=""></img><Link/></p>;
     
        
    
//       </>
//     `);
// })



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