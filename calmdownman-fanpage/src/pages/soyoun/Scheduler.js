import styled, { css } from "styled-components";
import Bg from "./img/bg.png";
// import Insta from "./img/insta.png";
// import Twitch from "./img/twitch.png";
// import Youtube from "./img/Youtube.png";
// import Mail from "./img/mail.png";
import Calendar from "./Calendar";

const Scheduler = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <BannerWrap></BannerWrap>
        </Header>

        <Container>
          <CalendarArea>
            <Calendar />
          </CalendarArea>
          <InfoArea>
            <Linklist>
              <ul>
                <li>
                    침착맨 생방송
                    <div></div>
                    <div></div>
                </li>
                <li>
                    침착맨 유튜브
                    <div></div>
                    <div></div>
                </li>
                <li>
                    침착맨 인스타
                    <div></div>
                </li>
                <li>
                    비즈니스 문의
                    <div></div>
                </li>
              </ul>
            </Linklist>
          </InfoArea>
        </Container>
        {/* 
            <Footer>

            </Footer> */}
      </Wrapper>
    </>
  );
};

//Styled Component
const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${Bg});
  background-position: center;
`;

const Container = styled.div`
  display: block;
  @media screen and (min-width: 834px) {
    display: flex;
  }
`;

const CalendarArea = styled.div`
  width: 100%;
  padding: 30px 50px;
  @media screen and (min-width: 834px) {
    flex-basis: 70%;
  }
`;

const InfoArea = styled.div`
  width: 100%;
  background-color: #ebebeb;
  padding: 30px 50px;
  

  @media screen and (min-width: 834px) {
    flex-basis: 30%;
  }
`;

const Linklist = styled.div`
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        @media screen and (min-width: 834px) {
            flex-direction: column;
        }

    } li{
        font-size: 30px;
        font-family: Yeon Sung;
        width: 50%;
        height: 100px;
        background-color: aliceblue;
        @media screen and (min-width: 834px) {
            width: 100%;
            
        }
    }
`;


export default Scheduler;
