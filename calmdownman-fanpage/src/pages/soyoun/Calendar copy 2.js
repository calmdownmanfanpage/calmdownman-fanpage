// import styled, { css } from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

// const events = [{ title: "Meeting", start: new Date() }];

function Calendar() {

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={function(selectInfo) {
          let title = prompt('Event Title:');
          let calendarApi = selectInfo.view.calendar;

          calendarApi.unselect();
          
          if (title) {
            calendarApi.addEvent({
              title: title,
              start: selectInfo.start,
              end: selectInfo.end,
              allDay: selectInfo.allDay
            })
          }
        }}
        selectMirror={true}
        weekends={true}
        locale={"ko"}
        headerToolbar={{
          start: "dayGridMonth,dayGridWeek,dayGridDay today",
          center: "title",
          end: "prev,next",
        }}
        dayMaxEvents={true}
        eventColor={"#daa9e1"}
        // events={[
        //   {
        //     title: "2주차 불침번",
        //     date: "2023-10-13",
        //   },
        //   {
        //     title: "3주차 불침번",
        //     date: "2023-10-16",
        //   },
        // ]} // events 배열을 사용하여 이벤트를 렌더링
        eventContent={renderEventContent}
        eventClick={(clickInfo) => {
          if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
          }
        }}
        eventsSet={(events) => {
          this.setState({
            currentEvents: events
          })
        }}
        // views={{
        //   listDay: { buttonText: "Day" },
        //   listWeek: { buttonText: "Week" },
        //   listMonth: { buttonText: "Month" },
        // }}
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
