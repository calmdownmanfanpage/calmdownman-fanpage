import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Bg from "./img/bg.png"

const events = [{ title: "Meeting", start: new Date() }];

export function DemoApp() {
  return (
    <>
      <Wrapper>
        <Header>
          <BannerWrap>
            {/* <img src={Bg} /> */}
          </BannerWrap>
        </Header>

        <Container>
          <CalendarArea>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              // weekends={false}
              events={[{ title: "침착맨 방송일", date: "2023-10-13" }, {}]}
              eventContent={renderEventContent}
            />
          </CalendarArea>
          <InfoArea>
            <div>
              <ul>
                <li>
                  <h3>침착맨 생방송</h3>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <h3>침착맨 유튜브</h3>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <h3>침착맨 인스타</h3>
                  <span></span>
                </li>
                <li>
                  <h3>비즈니스 문의</h3>
                  <span></span>
                </li>
              </ul>
            </div>           
          </InfoArea>
        </Container>
        {/* 
            <Footer>

            </Footer> */}
      </Wrapper>
    </>
  );
}

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
  background-color: aqua;
  padding: 30px 50px;
  @media screen and (min-width: 834px) {
    flex-basis: 70%;
  }
`;
const InfoArea = styled.div`
  width: 100%;
  background-color: aquamarine;
  padding: 30px 50px;
  h3{
    font-family: Dokdo;
  }
  @media screen and (min-width: 834px) {
    flex-basis: 30%;
  }
`;

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
