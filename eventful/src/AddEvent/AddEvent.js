import React from "react";
import axios from "axios";
import "./style.css";
import Footer from "../Footer/Footer";
import { BASE_API_URL, convertDateString } from "../Utility";

export default class AddEvent extends React.Component {
  state = {
    active: "basicInfo",

    editedId: "",
    /*Basic info */
    title: "",
    organizer: "",
    category: "education",
    hashtags: ["party"],
    /*location */
    address: "",
    postalCode: "",
    latLng: [],
    /*date time*/
    startDateTime: "",
    endDateTime: "",
    /*main event image */
    eventImage: "",
    customizedMapMarker: "",
    brandColor: "",
    /*description */
    descriptionSummary: "",
    description: "",

    //for loading the form
    formHashtags: [],
    formCategories: [],

    //to delete an event
    toDeletedEvent: {},
  };

  //load hashtags and categories for selectbox and dropdown list
  componentDidMount = async () => {
    try {
      let hashtagsRequest = axios.get(`${BASE_API_URL}/events/hashtags`);

      let categoriesRequest = axios.get(`${BASE_API_URL}/events/categories`);
      // console.log(response);
      let hashtagsResponse = await hashtagsRequest;
      let categoriesResponse = await categoriesRequest;

      this.setState({
        formHashtags: hashtagsResponse.data.data[0].hashtags,
        formCategories: categoriesResponse.data.data[0].categories,
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateActive = (active) => {
    this.setState({
      active: active,
    });
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateLatLng = (e) => {
    let clone = this.state.latLng.slice();
    if (e.target.name === "lat") {
      clone[0] = Number(e.target.value);
      this.setState({
        latLng: clone,
      });
    } else if (e.target.name === "lng") {
      clone[1] = Number(e.target.value);
      this.setState({
        latLng: clone,
      });
    }
  };

  processCheckbox = (e) => {
    let currentValues = this.state[e.target.name];
    let modifiedValues;

    if (!currentValues.includes(e.target.value)) {
      modifiedValues = [...currentValues, e.target.value];
    } else {
      modifiedValues = currentValues.filter((element) => {
        return element !== e.target.value;
      });
    }

    this.setState({
      [e.target.name]: modifiedValues,
    });
  };

  getLatLng = async () => {
    console.log("start retrieving Lat and lng");
    try {
      let response = await axios.get(
        `https://developers.onemap.sg/commonapi/search?searchVal=${this.state.postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
      );
      console.log(response);
      if (response.data.found === 0) {
        return `Postal code lat and lng not found; try change postal code again`;
      } else if (response.data.results[0]) {
        let lat = Number(response.data.results[0].LATITUDE);
        let lng = Number(response.data.results[0].LONGITUDE);
        this.setState({
          latLng: [lat, lng],
        });
      }
    } catch (e) {
      console.log(
        e,
        `oneMap API failed to retrieve the postal code ${this.state.postalCode}'s lat and lng`
      );
    }
  };

  postEvent = async () => {
    if (this.state.title !== "") {
      try {
        let response = await axios.post(`${BASE_API_URL}/events/create`, {
          title: this.state.title,
          organizer: this.state.organizer,
          category: this.state.category,
          hashtags: this.state.hashtags,
          address: this.state.address,
          postalCode: this.state.postalCode,
          latLng: this.state.latLng,
          startDateTime: this.state.startDateTime,
          endDateTime: this.state.endDateTime,
          eventImage: this.state.eventImage,
          customizedMapMarker: this.state.customizedMapMarker,
          brandColor: this.state.brandColor,
          descriptionSummary: this.state.descriptionSummary,
          description: this.state.description,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  renderFormPage = () => {
    if (this.state.active === "basicInfo") {
      return (
        <div className="basicInfo">
          <h5>Basic Info</h5>
          <div>
            <label>Event title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Be clear and concise"
              value={this.state.title}
              name="title"
              onChange={this.updateFormField}
            />
          </div>

          <div>
            <label>Organizer:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tell attendees who is organizing the event"
              value={this.state.organizer}
              name="organizer"
              onChange={this.updateFormField}
            />
            <p>This profile will appear in all events created by you.</p>
          </div>

          <div>
            <label>Category:</label>
            <select
              className="form-control"
              value={this.state.category}
              name="category"
              onChange={this.updateFormField}
            >
              {this.state.formCategories.map((cat) => {
                return <option>{cat}</option>;
              })}
            </select>
          </div>

          <div>
            <label>Tags:</label>
            {this.state.formHashtags
              ? this.state.formHashtags.map((tag) => {
                  return (
                    <React.Fragment key={tag}>
                      <input
                        type="checkbox"
                        name="hashtags"
                        value={tag}
                        checked={this.state.hashtags.includes(tag)}
                        onChange={this.processCheckbox}
                      />
                      {tag}
                    </React.Fragment>
                  );
                })
              : null}
            <p>
              Improve discoverability by adding tags relevant to subject matter
            </p>
            <div className="location">
              <h5>Location</h5>
              <div>
                <label>Address:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="address..."
                  value={this.state.address}
                  name="address"
                  onChange={this.updateFormField}
                />
              </div>

              <div>
                <label>Singapore postal:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="address..."
                  value={this.state.postalCode}
                  name="postalCode"
                  onChange={this.updateFormField}
                />
              </div>

              <p>Help people to know where to show up for your event</p>
            </div>
            <div className="dateTimeAdd">
              <h5>Date and time</h5>
              <div>
                <label>Event starts:</label>
                <input
                  className="form-control"
                  type="datetime-local"
                  placeholder="address..."
                  value={this.state.startDateTime}
                  name="startDateTime"
                  onChange={this.updateFormField}
                />
              </div>
              <div>
                <label>Event ends:</label>
                <input
                  className="form-control"
                  type="datetime-local"
                  placeholder="address..."
                  value={this.state.endDateTime}
                  name="endDateTime"
                  onChange={this.updateFormField}
                />
              </div>
              <p>
                Tell event-goers when your event starts and ends so they can
                make plans to attend.
              </p>
            </div>
            <button className="btn btn-primary" onClick={this.getLatLng}>
              get lat and lng button
            </button>
          </div>
        </div>
      );
    } else if (this.state.active === "details") {
      return (
        <React.Fragment>
          <div className="eventImage">
            <h5>Event image</h5>
            <div>
              <label>main event image:</label>
              <input
                className="form-control"
                type="text"
                placeholder="url..."
                value={this.state.eventImage}
                name="eventImage"
                onChange={this.updateFormField}
              />
            </div>
            <p>
              This is the first image attendees will see at the top of your
              listing. Use a high quality image
            </p>

            <div>
              <label>custom map marker:</label>
              <input
                className="form-control"
                type="text"
                placeholder="url..."
                value={this.state.customizedMapMarker}
                name="customizedMapMarker"
                onChange={this.updateFormField}
              />
            </div>

            <div>
              <div>
                <label>brand color:</label>
              </div>

              <input
                type="color"
                value={this.state.brandColor}
                name="brandColor"
                onChange={this.updateFormField}
              />
              <p>
                For branding purpose, both show up on the map and event listing
              </p>
            </div>
          </div>
          <div className="description">
            <h5>Description</h5>
            <p>
              Add more details to your event like your schedule, sponsors, or
              featured guests.
            </p>
            <div>
              <label>summary:</label>
              <input
                type="text"
                className="form-control"
                placeholder="write a short summary to get attendees excited"
                value={this.state.descriptionSummary}
                name="descriptionSummary"
                onChange={this.updateFormField}
              />
            </div>

            <div>
              <label>detailed description:</label>
              <textarea
                className="form-control"
                type="text"
                placeholder="..."
                value={this.state.description}
                name="description"
                onChange={this.updateFormField}
              />
            </div>
            <button className="btn btn-primary" onClick={this.postEvent}>
              submit
            </button>
            <button className="btn btn-primary" onClick={this.updateEventAPI}>
              update
            </button>
          </div>
        </React.Fragment>
      );
    } else if (this.state.active === "publish") {
      return <React.Fragment>publish event preview</React.Fragment>;
    }
  };

  updateEventBegins = (eachEvent) => {
    this.setState({
      editedId: eachEvent._id,
      title: eachEvent.title,
      organizer: eachEvent.organizer,
      category: eachEvent.category,
      hashtags: eachEvent.hashtags,
      address: eachEvent.address,
      postalCode: eachEvent.postalCode,
      latLng: eachEvent.latLng,
      startDateTime: eachEvent.startDateTime.slice(0, 16),
      endDateTime: eachEvent.endDateTime.slice(0, 16),
      eventImage: eachEvent.eventImage,
      customizedMapMarker: eachEvent.customizedMapMarker,
      brandColor: eachEvent.brandColor,
      descriptionSummary: eachEvent.descriptionSummary,
      description: eachEvent.description,
    });
  };

  updateEventAPI = async () => {
    if (
      // leave the dummy data intact
      this.state.editedId !== "" &&
      this.state.editedId !== 1 &&
      this.state.editedId !== 2 &&
      this.state.editedId !== 3
    ) {
      try {
        let response = await axios.put(
          `${BASE_API_URL}/events/${this.state.editedId}/update`,
          {
            title: this.state.title,
            organizer: this.state.organizer,
            category: this.state.category,
            hashtags: this.state.hashtags,
            address: this.state.address,
            postalCode: this.state.postalCode,
            latLng: this.state.latLng,
            startDateTime: this.state.startDateTime,
            endDateTime: this.state.endDateTime,
            eventImage: this.state.eventImage,
            customizedMapMarker: this.state.customizedMapMarker,
            brandColor: this.state.brandColor,
            descriptionSummary: this.state.descriptionSummary,
            description: this.state.description,
          }
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(
        "App creator is trying to keep the dummy data, do not update these events!"
      );
    }
  };
  saveToDeletedEvent = (event) => {
    this.setState({
      toDeletedEvent: event,
    });
  };

  deleteEvent = async () => {
    if (
      // leave the dummy data intact
      this.state.toDeletedEvent._id !== 1 &&
      this.state.toDeletedEvent._id !== 2 &&
      this.state.toDeletedEvent._id !== 3
    ) {
      try {
        let response = await axios.delete(
          `${BASE_API_URL}/events/${this.state.toDeletedEvent._id}/delete`
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(
        "App creator is trying to keep the dummy data, do not delete these events!"
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <main
          style={{
            display: this.props.display,
            // height: "80vh",
          }}
        >
          <section className="container-fluid mt-4">
            <div className="row gx-4">
              {/* form navgiation  */}

              {/* d-none */}
              <nav className="d-md-inline-flex formNav col-lg-1 d-flex flex-lg-column justify-content-center justify-content-lg-start align-items-center ">
                <a
                  id="basicInfo"
                  className={
                    this.state.active === "basicInfo" ? "active" : null
                  }
                  onClick={() => {
                    this.updateActive("basicInfo");
                  }}
                >
                  <i class="fa-solid fa-circle-ellipsis-vertical"></i>
                  <i className="fa-solid fa-circle-check me-1"></i>
                  basic info
                </a>

                <a
                  id="details"
                  className={this.state.active === "details" ? "active" : null}
                  onClick={() => {
                    this.updateActive("details");
                  }}
                >
                  details
                </a>

                <a
                  id="publish"
                  className={this.state.active === "publish" ? "active" : null}
                  onClick={() => {
                    this.updateActive("publish");
                  }}
                >
                  <i class="fa-solid fa-circle-half-stroke"></i>
                  <i className="fa-solid fa-circle-check me-2"></i>
                  publish
                </a>
              </nav>

              {/* render each form page */}

              <div className="mainForm col-lg-6 p-5 border">
                <h4 className="mb-4">
                  Add new event/Update event: salvation...
                </h4>
                {this.renderFormPage()}
              </div>

              {/* bootstrap accordian */}
              <article
                className="col-lg-5 accordianContainer
                px-2 p-lg-5
                accentThreeBgColor
            "
              >
                <div className="accordianBg p-3 pt-4">
                  <h5 className="ms-5">Published events</h5>
                  <div
                    className="
            accordion 
            accordion-flush 
            container-fluid"
                    id="accordionFlushExample"
                  >
                    {this.props.data.map((eachEvent, index) => {
                      return (
                        <div className="accordion-item" key={eachEvent._id}>
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <div
                              className="
                            accordion-button 
                            collapsed
                            "
                              data-bs-toggle="collapse"
                              data-bs-target={"#flush-collapse" + index}
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <span
                                style={{
                                  width: "10rem",
                                }}
                              >
                                {convertDateString(
                                  eachEvent.startDateTime
                                ).slice(4, 16)}
                              </span>
                              <span
                                className="ms-3 me-3"
                                style={{
                                  width: "24rem",
                                }}
                              >
                                {eachEvent.title.slice(0, 25)}...
                              </span>

                              <div
                                className="
                            organizerAccordian
                            d-flex
                            "
                              >
                                <span className="ms-auto me-3">
                                  {eachEvent.organizer}
                                </span>
                              </div>
                            </div>
                          </h2>
                          <div
                            id={"flush-collapse" + index}
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <img
                                className="publishedEventImage"
                                src={eachEvent.eventImage}
                              />
                              <h6>Date and time</h6>
                              <p>
                                {convertDateString(eachEvent.startDateTime)} -{" "}
                                {convertDateString(eachEvent.endDateTime)}{" "}
                                Singapore Standard Time
                              </p>
                              <h6>Location</h6>
                              <p>
                                {eachEvent.address} Singapore{" "}
                                {eachEvent.postalCode}
                              </p>
                              <h6>{eachEvent.descriptionSummary}</h6>
                              <h6>About this event</h6>
                              <p className="eventDescription">
                                {eachEvent.description.slice(0, 50)}...
                              </p>

                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  this.updateEventBegins(eachEvent);
                                }}
                              >
                                update
                              </button>

                              <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                                onClick={() => {
                                  this.saveToDeletedEvent(eachEvent);
                                }}
                              >
                                delete
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* pop up for warning to delete */}
          <div
            className="modal fade"
            id="deleteModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Are you sure you want to delete
                    {this.state.toDeletedEvent.title}?
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{this.state.toDeletedEvent.descriptionSummary}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.deleteEvent}
                  >
                    Confirm delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}
