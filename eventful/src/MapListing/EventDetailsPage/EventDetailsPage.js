import HashTagComponent from "./HashTagComponent/HashTagComponent";

export default function EventDetailsPage(props) {
  return (
    // Img
    // Date
    // Title
    // Organizer
    // Date time
    // Location
    // Description summary
    // Description
    // Tags
    // Social media link

    <div
      className="modal fade"
      id="moreInfoModel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
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
            <p>{props.data.organizer}</p>
            <p>{props.data.startDateTime}</p>
            <p>{props.data.endDateTime}</p>
            <p>
              {props.data.address} Singapore {props.data.postalCode}
            </p>
            <p>{props.data.descriptionSummary}</p>
            <p>{props.data.description}</p>
            {props.data.hashtags
              ? props.data.hashtags.map((tag) => {
                  return <HashTagComponent key={props.data._id} tag={tag} />;
                })
              : null}
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
