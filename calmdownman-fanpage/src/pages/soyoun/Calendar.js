// import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "Meeting", start: new Date() }];

function Calendar() {
  return (
    <>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
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
          
    </>
  );
}

//Styled Component


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