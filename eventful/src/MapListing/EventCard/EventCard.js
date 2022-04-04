import "./style.css";
import { convertDateString } from "../../Utility";
import { useEffect } from "react";
import { useState } from "react";
export default function EventCard(props) {
  // const convertDateString = (dateString) => {
  //   //slide off the gmt indicator, so that we can get proper date aligned with date selected by users
  //   let properDateString = new Date(dateString.slice(0, 16))
  //     .toString()
  //     .slice(0, 21);
  //   return properDateString;
  // };

  const setEvent = () => {
    props.setOneEvent(props.eachEvent);
  };

  useEffect(() => {
    setEvent();
  }, [props.eachEvent]);

  return (
    <div
      className="card shadow"
      style={{
        marginTop: props.margin ? props.margin : 0,
      }}
    >
      <img
        src={props.eachEvent.eventImage}
        className="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <div className="d-flex">
          <h6 className="card-title">{props.eachEvent.title}</h6>
          <i
            className="ms-auto fa-brands fa-gratipay"
            style={{
              color: "rgb(179, 179, 179)",
              fontSize: "1.5rem",
            }}
          ></i>
        </div>

        <div className="primaryColor dateTime">
          {convertDateString(props.eachEvent.startDateTime)}
        </div>
        {/* <div className="text-center">event in progress now...</div> */}
        <h7 className="card-text">
          {props.eachEvent.descriptionSummary.slice(0, 20)}...
        </h7>

        <div className="organizerBrand d-flex my-2">
          <h9
            style={{
              fontWeight: "500",
            }}
          >
            {props.eachEvent.organizer}
          </h9>
          {props.eachEvent.customizedMapMarker ? (
            <img
              className="ms-1"
              src={props.eachEvent.customizedMapMarker}
              alt={props.eachEvent.title}
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          ) : null}
        </div>

        <div className=" d-flex justify-content-between">
          <button
            className="eventCardBtn btn btn-info"
            data-bs-toggle="modal"
            // moreInfoModel
            data-bs-target="#moreInfoModel"
            onClick={() => {
              setEvent();
            }}
          >
            more info
          </button>
          {/* modal to show the event details */}

          <button
            className="eventCardBtn btn btn-danger"
            onClick={() => {
              props.showRouter(props.eachEvent);
            }}
          >
            direction
          </button>
        </div>
      </div>
    </div>
  );
}
