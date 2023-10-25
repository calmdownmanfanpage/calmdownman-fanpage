import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import Insta from "./img/insta.png";
import Twitch from "./img/twitch.png";
import YoutubeLogo from "./img/youtubeLogo.png";
import PlusLogo from "./img/plusLogo.png";
import OriginalLogo from "./img/originalLogo.png";
import CafeLogo from "./img/cafeLogo.svg";

const Linklist = () => {
    return (
        <>
            <StyledLinklist>
                <li>
                    <span>침착맨 생방송</span>
                    <div>
                    <Link to="https://www.twitch.tv/zilioner">
                        <img
                            src={Twitch}
                            alt="트위치생방송로고"
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
                            alt="유튜브쇼츠로고"
                        />
                    </Link>
                    </div>
                    <div>
                    <Link to="https://www.yhttps://www.youtube.com/@ChimChakMan_Dataoutube.com/@ChimChakMan_Plus">
                        <img
                            src={OriginalLogo}
                            alt="원본박물관로고"
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
                            alt="인스타그램로고"
                        />
                        </Link>
                    </div>
                </li>
                <li>
                    <span>침착맨 웹페이지</span>
                    <div>
                    <Link to="https://chimhaha.net/">
                        <img
                            src={CafeLogo}
                            alt="침하하카페로고"
                        />
                    </Link>
                    </div>
                </li>
            </StyledLinklist>
        </>
    );
};


const StyledLinklist = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (min-width: 834px) {
        flex-direction: column;
    } 
    li{
        font-size: 30px;
        font-family: Yeon Sung;
        width: 50%;
        padding: 10px 10px;
        text-align: center;
        @media screen and (min-width: 834px) {
            margin-top: 30px;
            width: 100%;
        }
        span{
            display: block;
            & + div {
            padding-top: 20px;
            }
        }
        div{
            display: inline-block;
            width: 60px;
            img{
                width: 100%;
            }
        } 
    }
`;

export default Linklist;