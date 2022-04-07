import "./style.css";
import React from "react";
import { convertDateString } from "../../Utility";

export default function EventCard(props) {
  const setEvent = () => {
    props.setOneEvent(props.eachEvent);
  };

  const setEventAndRoute = () => {
    props.setOneEvent(props.eachEvent);
    props.showRouter(props.eachEvent);
  };

  // useEffect(() => {
  //   setEvent();
  // }, [props.eachEvent]);

  return (
    <div
      className="card shadow"
      style={{
        margin: props.margin ? props.margin : 0,
      }}
    >
      <img
        src={props.eachEvent.eventImage}
        className="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <div className="d-flex">
          <h5 className="card-title">{props.eachEvent.title.slice(0, 20)}</h5>
          <i
            className="ms-auto fa-brands fa-gratipay"
            style={{
              color: "rgb(179, 179, 179)",
              fontSize: "1.5rem",
            }}
          ></i>
        </div>

        <div
          style={{
            fontSize: "1.2rem",
          }}
          className="primaryColor dateTime"
        >
          {convertDateString(props.eachEvent.startDateTime)}
        </div>

        <div className="organizerBrand d-flex my-2">
          <div
            style={{
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
          >
            {props.eachEvent.organizer}
          </div>
        </div>

        <div className="mt-2 d-flex justify-content-between">
          <button
            className="eventCardBtn customBtn customBtnAccentThree"
            data-bs-toggle="modal"
            // moreInfoModel
            data-bs-target="#moreInfoModel"
            ref={props.moreInfoBtnRef}
            onClick={() => {
              setEvent();
            }}
          >
            more info
          </button>
          {/* modal to show the event details */}

          <button
            className="eventCardBtn customBtn customBtnPrimary"
            onClick={() => {
              // props.showRouter(props.eachEvent);
              setEventAndRoute();
            }}
          >
            direction
          </button>
        </div>
      </div>
    </div>
  );
}
