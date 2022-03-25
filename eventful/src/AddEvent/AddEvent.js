import React from "react";
import "./style.scss";
import axios from "axios";

import { BASE_API_URL } from "../Utility";

export default class AddEvent extends React.Component {
  state = {
    active: "basicInfo",

    editedId: "",
    /*Basic info */
    title: "",
    organizer: "",
    category: "",
    hashtags: [],
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
          <h1>Basic Info</h1>
          <div>
            <h2>Event title:</h2>
            <input
              type="text"
              placeholder="Be clear and concise"
              value={this.state.title}
              name="title"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>Organizer:</h2>
            <input
              type="text"
              placeholder="Tell attendees who is organizing the event"
              value={this.state.organizer}
              name="organizer"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
            <p>This profile will appear in all events created by you.</p>
          </div>

          <div>
            <h2>Category:</h2>
            <select
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
            <h2>Tags:</h2>
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
          </div>

          <button className="btn btn-primary">next</button>
        </div>
      );
    } else if (this.state.active === "location") {
      return (
        <div className="location">
          <h1>Location</h1>
          <div>
            <h2>address:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.address}
              name="address"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>Singapore postal:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.postalCode}
              name="postalCode"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>latitude:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.latLng[0]}
              name="lat"
              onChange={this.updateLatLng}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>longitude:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.latLng[1]}
              name="lng"
              onChange={this.updateLatLng}
            />
            <button className="btn">clear</button>
            <p>Help people to know where to show up for your event</p>
          </div>
          <button className="btn btn-primary" onClick={this.getLatLng}>
            next
          </button>
        </div>
      );
    } else if (this.state.active === "dateTime") {
      return (
        <div className="dateTime">
          <h1>Date and time</h1>
          <div>
            <h2>event starts:</h2>
            <input
              type="datetime-local"
              placeholder="address..."
              value={this.state.startDateTime}
              name="startDateTime"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>
          <div>
            <h2>event ends:</h2>
            <input
              type="datetime-local"
              placeholder="address..."
              value={this.state.endDateTime}
              name="endDateTime"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>
          <p>
            Tell event-goers when your event starts and ends so they can make
            plans to attend.
          </p>
          <button className="btn btn-primary">next</button>
        </div>
      );
    } else if (this.state.active === "eventImage") {
      return (
        <div className="eventImage">
          <h1>Event image</h1>
          <div>
            <h2>main event image:</h2>
            <input
              type="text"
              placeholder="url..."
              value={this.state.eventImage}
              name="eventImage"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>
          <p>
            This is the first image attendees will see at the top of your
            listing. Use a high quality image
          </p>

          <div>
            <h2>custom map marker:</h2>
            <input
              type="text"
              placeholder="url..."
              value={this.state.customizedMapMarker}
              name="customizedMapMarker"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>brand color:</h2>

            <input
              type="color"
              value={this.state.brandColor}
              name="brandColor"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
            <p>
              For branding purpose, both show up on the map and event listing
            </p>
          </div>
          <button className="btn btn-primary">next</button>
        </div>
      );
    } else if (this.state.active === "description") {
      return (
        <div className="description">
          <h1>Description</h1>
          <p>
            Add more details to your event like your schedule, sponsors, or
            featured guests.
          </p>
          <div>
            <h2>summary:</h2>
            <input
              type="text"
              placeholder="write a short summary to get attendees excited"
              value={this.state.descriptionSummary}
              name="descriptionSummary"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>detailed description:</h2>
            <textarea
              type="text"
              placeholder="..."
              value={this.state.description}
              name="description"
              onChange={this.updateFormField}
            />
            <button className="btn">clear</button>
          </div>
          <button className="btn btn-primary" onClick={this.postEvent}>
            submit
          </button>
        </div>
      );
    }
  };

  updateEventBegins = (eachEvent) => {
    let activeState = this.state.active;
    this.setState({
      activeState,
      ...eachEvent,
    });
  };
  render() {
    return (
      <React.Fragment>
        <section
          style={{
            display: this.props.display,
            // height: "80vh",
          }}
        >
          <div className="createNewForm">
            <div className="container">
              <div className="leftbox">
                <nav className="createNewForm">
                  <a
                    id="basicInfo"
                    className={
                      this.state.active === "basicInfo" ? "active" : null
                    }
                    onClick={() => {
                      this.updateActive("basicInfo");
                    }}
                  >
                    <i className="fa fa-user">1. basic info</i>
                  </a>
                  <a
                    id="location"
                    className={
                      this.state.active === "location" ? "active" : null
                    }
                    onClick={() => {
                      this.updateActive("location");
                    }}
                  >
                    <i className="fa fa-credit-card">2. location</i>
                  </a>
                  <a
                    id="dateTime"
                    className={
                      this.state.active === "dateTime" ? "active" : null
                    }
                    onClick={() => {
                      this.updateActive("dateTime");
                    }}
                  >
                    <i className="fa fa-tv">3. date & time</i>
                  </a>
                  <a
                    id="eventImage"
                    className={
                      this.state.active === "eventImage" ? "active" : null
                    }
                    onClick={() => {
                      this.updateActive("eventImage");
                    }}
                  >
                    <i className="fa fa-tasks">4. event image</i>
                  </a>
                  <a
                    id="description"
                    className={
                      this.state.active === "description" ? "active" : null
                    }
                    onClick={() => {
                      this.updateActive("description");
                    }}
                  >
                    <i className="fa fa-cog">5. description</i>
                  </a>
                </nav>
              </div>
              <div className="rightbox">{this.renderFormPage()}</div>
            </div>
          </div>

          {/* bootstrap accordian */}
          <div
            className="accordion accordion-flush container"
            id="accordionFlushExample"
          >
            {this.props.data.map((eachEvent) => {
              return (
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {eachEvent.title}
                    </button>
                    <span>{eachEvent.startDateTime}</span>
                    <span>{eachEvent.organizer}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.updateEventBegins(eachEvent);
                      }}
                    >
                      update
                    </button>
                    <button className="btn btn-danger">delete</button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p>{eachEvent.descriptionSummary}</p>
                      <p>{eachEvent.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
