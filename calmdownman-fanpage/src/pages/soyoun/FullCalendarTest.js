import styled, { css } from "styled-components";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const events = [
  { title: 'Meeting', start: new Date() }
]

export function DemoApp() {
  return <>
    <Wrapper>
            <Header>
                  <BannerWrap>
                    
                  </BannerWrap>
            </Header>

            <Container>
                <CalendarArea>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView='dayGridMonth'
                        // weekends={false}
                        events={[
                            { title : "침착맨 방송일", date : "2023-10-13" },
                            {}
                        ]}
                        eventContent={renderEventContent}
                    />
                </CalendarArea>
                <InfoArea>
                    
                </InfoArea>
            </Container>
    {/* 
            <Footer>

            </Footer> */}
    </Wrapper>
  </>
    
   
}

//Styled Component 
const Wrapper = styled.div`
    width: 100%;
    background-color : #e2e7ed;
`;

const Header = styled.div`
    width: 100%;
    height: 150px;
    display:flex;
    justify-content: center;
`

const BannerWrap = styled.div`
    background-image: url('../../img/scheduleBanner.png');
`

const Container = styled.div`
    width: 100%;
    display: grid;
`

const CalendarArea = styled.div`
    
`
const InfoArea = styled.div`

`

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}