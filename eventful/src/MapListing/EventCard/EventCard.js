import "./style.css";
export default function EventCard(props) {
  return (
    <div
      className="card"
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
        <h5 className="card-title">{props.eachEvent.title}</h5>
        <p>{props.eachEvent.startDateTime}</p>
        <p>event in progress now...</p>
        <p className="card-text">{props.eachEvent.descriptionSummary}</p>
        <p>{props.eachEvent.organizer}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-info"
            data-bs-toggle="modal"
            // moreInfoModel
            data-bs-target="#moreInfoModel"
            onClick={() => {
              props.setOneEvent(props.eachEvent);
            }}
          >
            more info
          </button>
          {/* modal to show the event details */}

          <button
            className="btn btn-danger"
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
