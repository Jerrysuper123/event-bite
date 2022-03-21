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
        customizedMapMarker:
          "http://assets.stickpng.com/thumbs/585990604f6ae202fedf28d3.png",
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
        customizedMapMarker:
          "data:image/png;base64,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",
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

  // renderPage = () => {
  //   if (this.state.active === "map") {
  //     return <MapListing data={this.state.data} />;
  //   } else if (this.state.active === "calendar") {
  //     return <CalendarListing data={this.state.data} />;
  //   } else if (this.state.active === "addNew") {
  //     return <AddEvent />;
  //   }
  // };

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
          data={this.state.data}
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
