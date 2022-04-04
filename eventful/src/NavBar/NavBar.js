import React from "react";
import "./style.css";
import walkingIcon from "../images/walkingIcon.png";
export default function NavBar(props) {
  return (
    <nav
      id="navBar"
      className="navbar navbar-expand-lg navbar-light bg-light border shadow"
    >
      <div className="container-fluid">
        <div
          onClick={() => {
            props.setActive("landing");
          }}
          className="ms-lg-5 ms-sm-3"
        >
          <img
            src={walkingIcon}
            alt="logo"
            style={{
              width: "2.5rem",
            }}
          />
          <a className="navbar-brand logoText ms-2">eventful</a>
        </div>

        <button
          className="navbar-toggler me-lg-5 me-sm-3"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <a
                className="nav-link ms-5 pt-3 ps-2"
                aria-current="page"
                onClick={() => {
                  props.setActive("map");
                }}
              >
                <i className="navIcon fa-solid fa-map-location-dot"></i>
                <span className="ms-2 navText">map</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link ms-5 pt-3 ps-2"
                onClick={() => {
                  props.setActive("calendar");
                }}
              >
                <i className="navIcon fa-solid fa-calendar-days"></i>
                <span className="ms-2 navText">calendar</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link ms-5 pt-3 ps-2"
                onClick={() => {
                  props.setActive("addNew");
                }}
              >
                <i className="navIcon fa-solid fa-circle-plus"></i>
                <span className="ms-2 navText">add new event</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
