import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

class App extends React.Component {
  state = {
    active: "map",
    data: [],
  };

  setActive = (activePage) => {
    this.setState({
      active: activePage,
    });
  };

  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link">eventful</a>
          </li>

          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => {
                this.setActive("map");
              }}
            >
              map
            </button>
          </li>

          <li>
            <button
              className="nav-link"
              onClick={() => {
                this.setActive("calendar");
              }}
            >
              calendar
            </button>
          </li>

          <li>
            <button
              className="nav-link"
              onClick={() => {
                this.setActive("addNew");
              }}
            >
              add new event
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
