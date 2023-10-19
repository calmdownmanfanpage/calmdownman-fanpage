import { Link } from 'react-router-dom'
import styled, { css } from "styled-components";
import Bg from "./img/bg.png";
import Insta from "./img/insta.png";
import Twitch from "./img/twitch.png";
import YoutubeLogo from "./img/youtubeLogo.png";
import PlusLogo from "./img/plusLogo.png";
import OriginalLogo from "./img/originalLogo.png";
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
                    <span>침착맨 생방송</span>
                    <div>
                      <Link to="https://www.twitch.tv/zilioner">
                        <img
                            src={Twitch}
                            alt="유튜브로고"
                        />
                      </Link>
                    </div>
                </li>
                <li>
                <span>침착맨 유튜브</span>
                    <div>
                    <Link to="https://www.youtube.com/@ChimChakMan_Official/featured">
                        <img
                            src={YoutubeLogo}
                            alt="유튜브로고"
                        />
                      </Link>
                    </div>
                    <div>
                    <Link to="https://www.youtube.com/@ChimChakMan_Plus">
                        <img
                            src={PlusLogo}
                            alt="유튜브로고"
                        />
                      </Link>
                    </div>
                    <div>
                    <Link to="https://www.yhttps://www.youtube.com/@ChimChakMan_Dataoutube.com/@ChimChakMan_Plus">
                        <img
                            src={OriginalLogo}
                            alt="유튜브로고"
                        />
                      </Link>
                    </div>
                </li>
                <li>
                <span>침착맨 인스타</span>
                    <div>
                      <Link to="https://www.instagram.com/dangerousmanleebyeonggeon/">
                        <img
                            src={Insta}
                            alt="유튜브로고"
                        />
                        </Link>
                    </div>
                </li>
                <li>
                <span>참하하</span>
                    <div>
                      <Link to="https://chimhaha.net/">
                        <img
                            src={Insta}
                            alt="유튜브로고"
                        />
                      </Link>
                    </div>
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
    } 
    li{
        font-size: 30px;
        font-family: Yeon Sung;
        width: 50%;
        padding: 10px 10px;
        text-align: center;
        & + li{
        }
        @media screen and (min-width: 834px) {
            margin-top: 30px;
            width: 100%;
        }
    }
    span{
      display: block;
      & + div {
        padding-top: 20px;
      }
    }
    div{
        display: inline-block;
        width: 50px;
        margin-right: 20px;
    }
    img{
        width: 100%;
    }
`;


export default Scheduler;
