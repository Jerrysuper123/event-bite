import React, { useState, useRef } from "react";
import "./style.css";
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import ModalBody from "../MapListing/EventDetailsPage/FeedbackForm/ModalBody/ModalBody";

export default function CalendarListing(props) {
  let events = props.data.map((e) => {
    return {
      /*below 5 parameters are for the event on the calendar */
      id: e._id,
      //slice to convert 2022-03-25T18:00:00.000+00:00
      // into "2022-03-25T18:00" regardless of timezone
      startAt: e.startDateTime.slice(0, 16),
      endAt: e.endDateTime.slice(0, 16),
      summary: `${e.organizer} - ${e.title}`,
      // make this calendar event and event card color dynamic to brandColor chosen
      color: e.brandColor,

      //below data for the event detail pages when user click on event
      descriptionSummary: e.descriptionSummary,
      description: e.description,
      title: e.title,
      category: e.category,
      eventImage: e.eventImage,
      hashtags: e.hashtags,
      organizer: e.organizer,
      address: e.address,
      postalCode: e.postalCode,
      reviews: e.reviews,
      startDateTime: e.startDateTime,
      endDateTime: e.endDateTime,
    };
  });

  //contain one event details when user click on event
  const [oneEventDetails, setOneEventDetails] = useState({});
  //ref to the invisible modal button
  const modalBtnElement = useRef(null);

  const handleEventClick = (data) => {
    //get the event details where the event._id is the same as the calendar event.id
    setOneEventDetails(data);
    //click on the invisible modal button to show the modal
    modalBtnElement.current.click();
  };

  return (
    <div
      className="calendarContainer
      "
      style={{
        display: props.display,
      }}
    >
      <section className="container-fluid calendarBg pt-3 pb-4 shadow border">
        <h5
          className="text-center text-light pb-2"
          style={{
            fontStyle: "italic",
          }}
        >
          Click on the event below to check out its details
        </h5>
        <section
          className="
          calendar shadow-lg"
        >
          <Kalend
            //To adjust colors for today date circle, you can pass style prop to Kalend like this:
            style={{
              primaryColor: "#e27d60",
              baseColor: "#e27d60",
              inverseBaseColor: "#f2ecec",
            }}
            onEventClick={handleEventClick}
            // onNewEventClick={onNewEventClick}
            events={events}
            initialDate={new Date().toISOString()}
            hourHeight={60}
            initialView={CalendarView.MONTH}
            disabledViews={[CalendarView.AGENDA, CalendarView.THREE_DAYS]}
            // onSelectView={onSelectView}
            // selectedView={selectedView}
            // onPageChange={onPageChange}
            timeFormat={"24"}
            weekDayStart={"Monday"}
            calendarIDsHidden={["work"]}
            language={"en"}
          />

          {/*Launch the modal button but is displayed none  */}
          <button
            type="button"
            id="modalBtnElement"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#calendarEventModal"
            ref={modalBtnElement}
          >
            Launch calendar event modal
          </button>
        </section>
        {/* </div> */}
      </section>

      {/* event details page */}
      <div
        className="modal fade"
        id="calendarEventModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-md modal-lg modal-xl">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close ms-auto btn-close-white me-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img
              className="modalImg"
              src={
                oneEventDetails.eventImage ? oneEventDetails.eventImage : null
              }
              alt={oneEventDetails.title}
            />
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {oneEventDetails.title ? oneEventDetails.title : "sample title"}
              </h5>
            </div>
            <div className="modal-body">
              <ModalBody data={oneEventDetails ? oneEventDetails : null} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="customBtn customBtnAccentThree"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
