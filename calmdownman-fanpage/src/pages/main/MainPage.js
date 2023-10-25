import { Link } from "react-router-dom";
import styled from "styled-components";
import { path } from "../router";

const BannerContainers = styled.div`
  max-width: 1280px;
  height: 700px;
  padding: 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 35px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2bec3;
  border-radius: 15px;
  &:hover {
    scale: 1.1;
    transition: 0.5s;
  }
`;
const BannerImg = styled.div`
  background-image: url(${(props) => props.img});
  width: 300px;
  height: 200px;
  background-size: contain;
  box-sizing: border-box;
  background-repeat: no-repeat;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 800;
    font-size: 28px;
    color: white;
  }
`;

const MainPage = () => {
  const bannerInfo = [
    {
      name: "✨ 침착맨 웹툰",
      pathname: path.choonghyun,
      image: "/main-banner1.png",
    },
    {
      name: "✨ 침착맨 일정",
      pathname: path.soyoun,
      image: "/main-banner2.png",
    },
    {
      name: "✨ 침착맨 게스트",
      pathname: path.teahyeong,
      image: "/icon_home.png",
    },
    { name: "✨ 침착맨 유튜브", pathname: path.video, image: "/icon_home.png" },
  ];
  return (
    <>
      <BannerContainers>
        {bannerInfo.map((item, index) => (
          <StyledWrapper key={index}>
            <StyledLink to={item.pathname}>
              <BannerImg img={item.image} />
              <h1>{item.name}</h1>
            </StyledLink>
          </StyledWrapper>
        ))}
      </BannerContainers>
    </>
  );
};

export default MainPage;
