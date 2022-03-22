import React from "react";
import "./style.scss";

export default class AddEvent extends React.Component {
  state = {
    active: "basicInfo",
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
          <h2>Full Name</h2>
          <p>
            Julie Park <button className="btn">update</button>
          </p>
          <h2>Birthday</h2>
          <p>July 21</p>
          <h2>Gender</h2>
          <p>Female</p>
          <h2>Email</h2>
          <p>
            example@example.com <button className="btn">update</button>
          </p>
          <h2>Password </h2>
          <p>
            ••••••• <button className="btn">Change</button>
          </p>
        </div>
      );
    } else if (this.state.active === "location") {
      return (
        <div className="location">
          <h1>Location</h1>
          <h2>Payment Method</h2>
          <p>
            Mastercard •••• •••• •••• 0000{" "}
            <button className="btn">update</button>
          </p>
          <h2>Billing Address</h2>
          <p>
            1234 Example Ave | Seattle, WA{" "}
            <button className="btn">change</button>
          </p>
          <h2>Zipcode</h2>
          <p>999000</p>
          <h2>Billing History</h2>
          <p>
            2018<button className="btn">view</button>
          </p>
          <h2>Redeem Gift Subscription </h2>
          <p>
            <input type="text" placeholder="Enter Gift Code"></input>{" "}
            <button className="btn">Redeem</button>
          </p>
        </div>
      );
    } else if (this.state.active === "dateTime") {
      return (
        <div className="dateTime">
          <h1>Date & time</h1>
          <h2>Payment Date</h2>
          <p>
            05-15-2018 <button className="btn">pay now</button>
          </p>
          <h2>Your Next Charge</h2>
          <p>
            $8.48<span> includes tax</span>
          </p>
          <h2>Hulu Base Plan</h2>
          <p>
            Limited Commercials <button className="btn">change plan</button>
          </p>
          <h2>Add-ons</h2>
          <p>
            None <button className="btn">manage</button>
          </p>
          <h2>Monthly Recurring Total </h2>
          <p>$7.99/month</p>
        </div>
      );
    } else if (this.state.active === "eventImage") {
      return (
        <div className="eventImage">
          <h1>Main event image</h1>
          <h2>
            Manage Email Notifications
            <button className="btn">manage</button>
          </h2>
          <p></p>
          <h2>
            Manage Privacy Settings<button className="btn">manage</button>
          </h2>
          <p></p>
          <h2>
            View Terms of Use <button className="btn">view</button>
          </h2>
          <p></p>
          <h2>
            Personalize Ad Experience <button className="btn">update</button>
          </h2>
          <p></p>
          <h2>
            Protect Your Account <button className="btn">protect</button>
          </h2>
          <p></p>
        </div>
      );
    } else if (this.state.active === "description") {
      return (
        <div className="description">
          <h1>Description</h1>
          <h2>
            Sync Watchlist to My Stuff<button className="btn">sync</button>
          </h2>
          <p></p>
          <h2>
            Hold Your Subscription<button className="btn">hold</button>
          </h2>
          <p></p>
          <h2>
            Cancel Your Subscription <button className="btn">cancel</button>
          </h2>
          <p></p>
          <h2>
            Your Devices <button className="btn">Manage Devices</button>
          </h2>
          <p></p>
          <h2>
            Referrals <button className="btn">get $10</button>
          </h2>
          <p></p>
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
                <i className="fa fa-user"></i>
              </a>
              <a
                id="location"
                className={this.state.active === "location" ? "active" : null}
                onClick={() => {
                  this.updateActive("location");
                }}
              >
                <i className="fa fa-credit-card"></i>
              </a>
              <a
                id="dateTime"
                className={this.state.active === "dateTime" ? "active" : null}
                onClick={() => {
                  this.updateActive("dateTime");
                }}
              >
                <i className="fa fa-tv"></i>
              </a>
              <a
                id="eventImage"
                className={this.state.active === "eventImage" ? "active" : null}
                onClick={() => {
                  this.updateActive("eventImage");
                }}
              >
                <i className="fa fa-tasks"></i>
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
                <i className="fa fa-cog"></i>
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
