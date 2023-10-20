
import styled, { css } from "styled-components";
import Bg from "./img/bg.png";
import Calendar from "./Calendar";
import Linklist from "./Linklist";

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
              <Linklist></Linklist>
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




export default Scheduler;
