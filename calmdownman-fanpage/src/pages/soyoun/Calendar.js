import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "Meeting", start: new Date() }];

function Calendar() {
  return (
    <>
      <StyledFullcalendarContainer>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            locale={'ko'}
            headerToolbar={
                {
                  start: 'today', 
                  center: 'title',
                  end: 'prev,next' 
              }
            }
            events={[
            { 
              title: "2주차 불침번", 
              date: "2023-10-13"
            },
            {
              title: "3주차 불침번",
              date: "2023-10-16" 
            },
            
          ]}
            eventContent={renderEventContent}
          />
      </StyledFullcalendarContainer>
    </>
  );
}

//Styled Component
const StyledFullcalendarContainer = styled.div`
  // toolbar container
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 0;
    padding: 0 40px;
    background-color: #356eff;
    height: 63px;
    font-weight: 600;
    font-size: 12px;
    line-height: 29px;
    color: white;
    border-radius: 20px 20px 0px 0px;
  }

  // toolbar 버튼
  .fc .fc-button-primary {
    background-color: transparent;
    border: none;

    span {
      font-weight: 500;
      font-size: 28px;
    }

    :hover {
      background-color: transparent;
    }
  }

  // 요일 부분
  .fc-theme-standard th {
    height: 32px;
    padding-top: 3.5px;
    background: #e5edff;
    border: 1px solid #dddee0;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #7b7b7b;
  }

  // 오늘 날짜 배경색
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #fff8bd;
    color: #356eff;
  }

  // 날짜별 그리드
  .fc .fc-daygrid-day-frame {
    padding: 10px;
  }

  // 날짜  ex) 2일
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    margin-bottom: 3px;
  }

  // 각 이벤트 요소
  .fc-event {
    cursor: pointer;
    padding: 5px 8px;
    margin-bottom: 5px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
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

export default Calendar;