// import React from 'react';
// import dummy from "./DB/Data.json"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {Link} from 'react-router-dom'
// import  withRouter  from 'react-router-dom';



const Users = [
  {First: "https://comic.naver.com/webtoon/list?titleId=103759", Last: "https://image-comic.pstatic.net/webtoon/103759/thumbnail/thumbnail_IMAG21_3546920286159910456.jpg"},
  {First: "https://comic.naver.com/webtoon/list?titleId=602921", Last: "https://image-comic.pstatic.net/webtoon/602921/thumbnail/thumbnail_IMAG21_3847030872581824819.jpg"},
  {First: "https://comic.naver.com/webtoon/list?titleId=704595", Last: "https://image-comic.pstatic.net/webtoon/704595/thumbnail/thumbnail_IMAG21_3978194032709283938.jpg"},
  {First: "https://comic.naver.com/webtoon/list?titleId=557527", Last: "https://image-comic.pstatic.net/webtoon/557527/thumbnail/thumbnail_IMAG21_7090408969817175097.jpg"},
  {First: "https://comic.naver.com/webtoon/list?titleId=687127", Last: "https://image-comic.pstatic.net/webtoon/687127/thumbnail/thumbnail_IMAG21_4063431270715437410.jpg"},
];


export default function Address() {
  return(
    <>

    {/* Users.map(
      (Users) =<p><Link to={Users.First}></Link>
      <img src={Users.Last}> </img>)</p> */}

    



  


    
    
    </>

  )
}






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
