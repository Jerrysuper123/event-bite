import React from "react";
import "./style.css";
export default function NavBar(props) {
  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div
          onClick={() => {
            props.setActive("landing");
          }}
        >
          <a className="navbar-brand logoText">eventful</a>
        </div>

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                onClick={() => {
                  props.setActive("map");
                }}
              >
                map view
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  props.setActive("calendar");
                }}
              >
                calendar view
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  props.setActive("addNew");
                }}
              >
                add new event
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
