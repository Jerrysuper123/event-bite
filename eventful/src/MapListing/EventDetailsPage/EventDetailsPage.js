import "./style.css";
import DisplayFeedback from "./DisplayFeedback.js/DisplayFeedback";
import FeedbackForm from "./FeedbackForm.js/FeedbackForm";
import React from "react";
import { convertDateString } from "../../Utility";

export default function EventDetailsPage(props) {
  const [submitState, setSubmitState] = React.useState(false);
  const resetReviewForm = () => {
    setSubmitState(false);
  };

  return (
    <div
      className="modal fade"
      id="moreInfoModel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onClick={resetReviewForm}
    >
      <div className="modal-dialog modal-sm modal-md modal-lg modal-xl">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close ms-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={resetReviewForm}
          ></button>

          <img src={props.data.eventImage} alt={props.data.title} />
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.data.title}
            </h5>
          </div>

          <div className="modal-body">
            <div className="d-flex">
              <i class="fa-solid fa-hourglass-start me-3"></i>
              <div>
                <h6>Category</h6>
                <p>{props.data.category}</p>
              </div>
            </div>

            <div className="d-flex">
              <i class="fa-solid fa-circle-plus me-3"></i>
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
              <i class="fa-solid fa-calendar me-3"></i>
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
              <i class="fa-solid fa-location-pin me-3"></i>
              <div>
                <h6>Location</h6>
                <p>
                  {props.data.address} Singapore {props.data.postalCode}
                </p>
              </div>
            </div>

            <div className="d-flex">
              <i class="fa-solid fa-align-center me-3"></i>
              <div>
                <h7
                  style={{
                    color: "black",
                    fontSize: "1.3rem",
                  }}
                >
                  {props.data.descriptionSummary}
                </h7>
                <h6 className="mt-3">About this event</h6>
                <p>{props.data.description}</p>
              </div>
            </div>

            <div className="d-flex">
              <i class="fa-solid fa-tag me-3"></i>
              <h6>Tags</h6>
            </div>

            <div className="mt-4 ms-3 tagContainer d-flex flex-md-column flex-sm-column flex-lg-row">
              {props.data.hashtags
                ? props.data.hashtags.map((tag) => {
                    return (
                      <span key={props.data._id} className="tagStyle">
                        {tag}
                      </span>
                    );
                  })
                : null}
            </div>

            <div className="border-bottom pb-5 mx-4 pt-4 text-center">
              <h6>Share with friends</h6>
              <div className="shareIcon">
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
            </div>

            {/* display reviews */}
            <section>
              <h6>Reviews</h6>
              {props.data.reviews
                ? props.data.reviews.map((review) => {
                    return <DisplayFeedback key={review._id} review={review} />;
                  })
                : null}
            </section>

            {/* asking for more reviews */}
            <section>
              {submitState ? (
                <p>
                  Thank you for your feedback and your feedback has been
                  submitted.
                </p>
              ) : (
                <FeedbackForm
                  eventId={props.data._id}
                  getAllEventsFromAPI={props.getAllEventsFromAPI}
                  setSubmitState={setSubmitState}
                />
              )}
            </section>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="customBtn customBtnAccentThree"
              data-bs-dismiss="modal"
              onClick={resetReviewForm}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
