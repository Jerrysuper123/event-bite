import HashTagComponent from "./HashTagComponent/HashTagComponent";
import "./style.css";
import DisplayFeedback from "./DisplayFeedback.js/DisplayFeedback";
import FeedbackForm from "./FeedbackForm.js/FeedbackForm";
import React from "react";
import { useEffect } from "react";

export default function EventDetailsPage(props) {
  const [submitState, setSubmitState] = React.useState(false);

  return (
    <div
      className="modal fade"
      id="moreInfoModel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm modal-md modal-lg modal-xl">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <img src={props.data.eventImage} alt={props.data.title} />
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.data.title}
            </h5>
          </div>

          <div className="modal-body">
            <p>{props.data.category}</p>
            <p
              style={{
                color: props.data.brandColor,
              }}
            >
              {props.data.organizer}
            </p>
            <p>{props.data.startDateTime}</p>
            <p>{props.data.endDateTime}</p>
            <p>
              {props.data.address} Singapore {props.data.postalCode}
            </p>
            <p>{props.data.descriptionSummary}</p>
            <p>{props.data.description}</p>
            <h4>tags:</h4>
            <div>
              {props.data.hashtags
                ? props.data.hashtags.map((tag) => {
                    return <HashTagComponent key={props.data._id} tag={tag} />;
                  })
                : null}
            </div>

            {/* display reviews */}

            {props.data.reviews
              ? props.data.reviews.map((review) => {
                  return <DisplayFeedback key={review._id} review={review} />;
                })
              : null}

            {/* asking for more reviews */}
            <FeedbackForm
              eventId={props.data._id}
              getAllEventsFromAPI={props.getAllEventsFromAPI}
              setSubmitState={setSubmitState}
            />
            {submitState ? (
              <p>
                Thank you for your feedback and your feedback has been
                submitted.
              </p>
            ) : null}
          </div>

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
  );
}
