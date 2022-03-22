import React from "react";
import "./style.scss";

export default class AddEvent extends React.Component {
  state = {
    active: "basicInfo",

    /*Basic info */
    title: "",
    organizer: "",
    category: "",
    hashtags: [],
    /*location */
    customizedMapMarker: "",
    brandColor: "",
    address: "",
    postalCode: "",
    latLng: [],
    /*date time*/
    startDateTime: "",
    endDateTime: "",
    /*main event image */
    eventImage: "",
    /*description */
    descriptionSummary: "",
    description: "",
  };

  updateActive = (active) => {
    this.setState({
      active: active,
    });
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
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>Organizer:</h2>
            <input
              type="text"
              placeholder="Tell attendees who is organizing the event"
              value={this.state.organizer}
            />
            <button className="btn">clear</button>
            <p>This profile will appear in all events created by you.</p>
          </div>

          <div>
            <h2>Category:</h2>
            <select value={this.state.category}>
              <option>education</option>
              <option>health & wellness</option>
              <option>science & tech</option>
              <option>community & cultural</option>
              <option>promotion</option>
              <option>tourism</option>
            </select>
          </div>

          <div>
            <h2>Tags</h2>
            <p>
              Improve discoverability by adding tags relevant to subject matter
            </p>
            <input type="text" />
            <div id="tagsAddedList" value={this.state.tags}></div>
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
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>Singapore postal:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.postalCode}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>latitude:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.latLng[0]}
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>longitude:</h2>
            <input
              type="text"
              placeholder="address..."
              value={this.state.latLng[1]}
            />
            <button className="btn">clear</button>
            <p>Help people to know where to show up for your event</p>
          </div>
          <button className="btn btn-primary">next</button>
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
            />
            <button className="btn">clear</button>
          </div>
          <div>
            <h2>event ends:</h2>
            <input
              type="datetime-local"
              placeholder="address..."
              value={this.state.endDateTime}
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
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>brand color:</h2>
            <input type="color" value={this.state.brandColor} />
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
            />
            <button className="btn">clear</button>
          </div>

          <div>
            <h2>detailed description:</h2>
            <textarea
              type="text"
              placeholder="..."
              value={this.state.description}
            />
            <button className="btn">clear</button>
          </div>
          <button className="btn btn-primary">submit</button>
        </div>
      );
    }
  };
  render() {
    return (
      <div
        style={{
          display: this.props.display,
          height: "80vh",
        }}
        className="createNewForm"
      >
        <div className="container">
          <div className="leftbox">
            <nav className="createNewForm">
              <a
                id="basicInfo"
                className={this.state.active === "basicInfo" ? "active" : null}
                onClick={() => {
                  this.updateActive("basicInfo");
                }}
              >
                <i className="fa fa-user">1. basic info</i>
              </a>
              <a
                id="location"
                className={this.state.active === "location" ? "active" : null}
                onClick={() => {
                  this.updateActive("location");
                }}
              >
                <i className="fa fa-credit-card">2. location</i>
              </a>
              <a
                id="dateTime"
                className={this.state.active === "dateTime" ? "active" : null}
                onClick={() => {
                  this.updateActive("dateTime");
                }}
              >
                <i className="fa fa-tv">3. date & time</i>
              </a>
              <a
                id="eventImage"
                className={this.state.active === "eventImage" ? "active" : null}
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

        {/* <footer>
          <p>
            Credit: <a href="https://codepen.io/juliepark"> Julie</a>
          </p>
        </footer> */}
      </div>
    );
  }
}
