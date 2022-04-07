import React from "react";
import { convertDateString } from "../../../../Utility";

export default function ModalBody(props) {
  return (
    <React.Fragment>
      <div className="d-flex">
        <i className="fa-solid fa-hourglass-start me-3"></i>
        <div>
          <h6>Category</h6>
          <p>{props.data.category}</p>
        </div>
      </div>

      <div className="d-flex">
        <i className="fa-solid fa-circle-plus me-3"></i>
        <div>
          <h6>Organizer</h6>
          <p
            style={{
              color: props.data.brandColor,
              fontWeight: "500",
              fontStyle: "italic",
            }}
          >
            {props.data.organizer}
          </p>
        </div>
      </div>

      <div className="d-flex">
        <i className="fa-solid fa-calendar me-3"></i>
        <div>
          <h6>Date and time (SGT)</h6>
          <p>
            {props.data.startDateTime
              ? convertDateString(props.data.startDateTime)
              : null}{" "}
            -
            {props.data.endDateTime
              ? convertDateString(props.data.endDateTime)
              : null}
          </p>
        </div>
      </div>

      <div className="d-flex">
        <i className="fa-solid fa-location-pin me-3"></i>
        <div>
          <h6>Location</h6>
          <p>
            {props.data.address} Singapore {props.data.postalCode}
          </p>
        </div>
      </div>

      <div className="d-flex">
        <i className="fa-solid fa-align-center me-3"></i>
        <div>
          <h6
            style={{
              color: "black",
              fontSize: "1.3rem",
            }}
          >
            {props.data.descriptionSummary}
          </h6>
          <h6 className="mt-3">About this event</h6>
          <p>{props.data.description}</p>
        </div>
      </div>

      <div className="d-flex">
        <i className="fa-solid fa-tag me-3"></i>
        <h6>Tags</h6>
      </div>

      <div className="tagContainer">
        {props.data.hashtags
          ? props.data.hashtags.map((tag, index) => {
              return (
                <span key={index} className="tagStyle">
                  {tag}
                </span>
              );
            })
          : null}
      </div>

      <div className="border-bottom pb-5 mx-4 pt-4 text-center">
        <h6>Share with friends</h6>
        <div className="shareIcon">
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
      </div>
    </React.Fragment>
  );
}
