import React, { useState, useRef } from "react";
import "./style.css";
import Footer from "../Footer/Footer";
//import calendar and its styles
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";

export default function CalendarListing(props) {
  let events = props.data.map((e) => {
    return {
      id: e._id,
      //slice to convert 2022-03-25T18:00:00.000+00:00
      // into "2022-03-25T18:00" regardless of timezone
      startAt: e.startDateTime.slice(0, 16),
      endAt: e.endDateTime.slice(0, 16),
      summary: `${e.organizer} - ${e.title}`,
      // make this calendar event and event card color dynamic to brandColor chosen
      color: e.brandColor,
    };
  });

  const [oneEventDetails, setOneEventDetails] = useState({});
  //ref to the button
  const modalBtnElement = useRef(null);

  const onEventClick = (data) => {
    //get the event details where the event._id is the same as the calendar event.id
    let clickedEvent = props.data.filter((e) => e._id === data.id);
    setOneEventDetails(clickedEvent[0]);
    modalBtnElement.current.click();
  };

  return (
    <div
      className="calendarContainer"
      style={{
        display: props.display,
      }}
    >
      <section className="calendar container mb-5 mt-5 shadow">
        <Kalend
          //To adjust colors for today date circle, you can pass style prop to Kalend like this:
          style={{
            primaryColor: "#e27d60",
            baseColor: "#3d3c3c",
            inverseBaseColor: "#f2ecec",
          }}
          onEventClick={onEventClick}
          // onNewEventClick={onNewEventClick}
          events={events}
          initialDate={new Date().toISOString()}
          hourHeight={60}
          initialView={CalendarView.WEEK}
          disabledViews={[CalendarView.AGENDA, CalendarView.THREE_DAYS]}
          // onSelectView={onSelectView}
          // selectedView={selectedView}
          // onPageChange={onPageChange}
          timeFormat={"24"}
          weekDayStart={"Monday"}
          calendarIDsHidden={["work"]}
          language={"en"}
        />

        <div className="subText">
          credit:{" "}
          <a href="https://github.com/nibdo/kalend" target="_blank">
            Kalend
          </a>
        </div>

        {/*Launch the modal but is displayed none  */}
        <button
          type="button"
          id="modalBtnElement"
          classNameName="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#calendarEventModal"
          ref={modalBtnElement}
        >
          Launch calendar event modal
        </button>
      </section>

      {/* event details page */}
      <div
        className="modal fade"
        id="calendarEventModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {oneEventDetails.title ? oneEventDetails.title : "sample title"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
