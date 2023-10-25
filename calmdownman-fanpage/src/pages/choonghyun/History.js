import styled from 'styled-components';
import Swip from './Swip';
import "./fonts/Font.css";


const History = () => {
    return (
      <>
      
      <font/>
      
      <Title>침착맨의 작품</Title>
      
      <Backcolor>
      <Swip/>
      </Backcolor>
        
        
        
      </>
    );
  };

  const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: palevioletred;
  font-family: 'iceJaram-Rg';
  margin : 40px;

`;
 

const Backcolor = styled.div`
.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgba(4, 248, 236, 0.877);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

#app { height: 80% }
html,
body {
  position: relative;
  height: 80%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}


html,
body {
  position: relative;
  height: 150%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 620px;
  height: 720px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
`


  export default History;