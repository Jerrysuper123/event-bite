import "./style.css";
import DisplayFeedback from "./DisplayFeedback/DisplayFeedback";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import React from "react";
import ModalBody from "./FeedbackForm/ModalBody/ModalBody";

export default function EventDetailsPage(props) {
  const [submitState, setSubmitState] = React.useState(false);
  const resetReviewForm = () => {
    setSubmitState(false);
  };

  return (
    <div
      className="modal fade"
      id="moreInfoModel"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onClick={resetReviewForm}
    >
      <div className="modal-dialog modal-sm modal-md modal-lg modal-xl">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close ms-auto btn-close-white me-1"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={resetReviewForm}
          ></button>

          <img
            className="modalImg"
            src={props.data.eventImage}
            alt={props.data.title}
          />
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.data.title}
            </h5>
          </div>

          <div className="modal-body">
            <ModalBody data={props.data} />

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
                <p>Thank you and your feedback has been submitted.</p>
              ) : (
                <FeedbackForm
                  setOneEventDetails={props.setOneEventDetails}
                  oneEventDetails={props.oneEventDetails}
                  data={props.data}
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
