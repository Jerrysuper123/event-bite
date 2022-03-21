import React from "react";

import MapListing from "./MapListing/MapListing";
import CalendarListing from "./CalendarListing/CalendarListing";
import AddEvent from "./AddEvent/AddEvent";
import "./App.css";

class App extends React.Component {
  state = {
    active: "map",
    data: [
      {
        _id: 1,
        title: "recyle day with salvation army",
        organizer: "Salvation Army",
        category: "Promotional",
        address: "Singapore botanic garden",
        postalCode: 259569,
        latLng: [1.3138, 103.8159],
        startDateTime: "2022-03-21T10:00",
        endDateTime: "2022-03-21T10:22",
        eventImage:
          "https://saltandlight.sg/wp-content/uploads/2018/12/fullsizeoutput_265.jpeg",
        descriptionSummary: "get earth cleaned with our own hands",
        description: "this is a description",
        customizedMapMarker: "",
        hashtags: ["adventure", "nature", "environmental-friendly"],
      },
      {
        _id: 2,
        title: "Store-wide 10% discount",
        organizer: "H&M",
        category: "Promotional",
        address: "50 Jurong Gateway Rd, #01 - 01, #02 - 01, #03 - 01",
        postalCode: 608549,
        latLng: [1.3335, 103.7437],
        startDateTime: "2022-03-21T08:00",
        endDateTime: "2022-03-21T09:00",
        eventImage:
          "https://static-cdn.giftano.com/fls/merchants/hm-profile-image_retail-shop-front.png",
        descriptionSummary: "Get all pieces at 10% discount store wide",
        description: "this is a description",
        customizedMapMarker: "",
        hashtags: ["promotion", "close sales", "shopping"],
      },
      {
        _id: 3,
        title: "CNY Lion Dance",
        organizer: "Trent Global College",
        category: "Promotional",
        address: "229 Mountbatten Rd, #01-30 ERCI Campus",
        postalCode: 398007,
        latLng: [1.3076, 103.8808],
        startDateTime: "2022-03-21T08:00",
        endDateTime: "2022-03-21T09:00",
        eventImage:
          "https://scontent.fsin4-1.fna.fbcdn.net/v/t39.30808-6/241498903_4357298927641396_5094941826354704194_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=TBuPmK-vKyYAX-UiVlh&_nc_ht=scontent.fsin4-1.fna&oh=00_AT_DxBVP8g99i4bkS4o8QacaHepo7bgkN_QGmE-1DXd0dg&oe=62393C3E",
        descriptionSummary: "Watch lion dance to bring prosperity",
        description: "this is a description",
        customizedMapMarker: "",
        hashtags: ["fengshui", "school", "student"],
      },
    ],
    userLocationLatLng: [],
  };

  setActive = (activePage) => {
    this.setState({
      active: activePage,
    });
  };

  renderPage = () => {
    if (this.state.active === "map") {
      return <MapListing data={this.state} />;
    } else if (this.state.active === "calendar") {
      return <CalendarListing data={this.state.data} />;
    } else if (this.state.active === "addNew") {
      return <AddEvent />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand logoText">eventful</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      this.setActive("map");
                    }}
                  >
                    map view
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      this.setActive("calendar");
                    }}
                  >
                    calendar view
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      this.setActive("addNew");
                    }}
                  >
                    add new event
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* {this.renderPage()} */}
        {/* <MapListing data={this.state.data} />
        <CalendarListing /> */}
        <MapListing
          data={this.state}
          display={this.state.active === "map" ? "block" : "none"}
        />
        <CalendarListing
          data={this.state.data}
          display={this.state.active === "calendar" ? "block" : "none"}
        />
        <AddEvent display={this.state.active === "addNew" ? "block" : "none"} />
      </React.Fragment>
    );
  }
}

export default App;
