import React from "react";
import defaultEventOne from "../images/defaultEventOne.jpg";
import defaultEventTwo from "../images/defaultEventTwo.jpg";
import defaultEventThree from "../images/defaultEventThree.jpg";

export default function LandingPage(props) {
  return (
    <section
      style={{
        display: props.display,
      }}
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* {props.data.map((event, index) => {
            console.log("Image url", event.eventImage);
            return (
              <div className="carousel-item">
                <img
                  src={event.eventImage}
                  className="d-block w-100"
                  alt={event.title}
                />
              </div>
            );
          })} */}

          {props.data[0] ? (
            <div className="carousel-item active">
              <img
                src={props.data[0].eventImage}
                className="d-block w-100"
                alt={props.data[0].title}
              />
            </div>
          ) : (
            <div className="carousel-item active">
              <img
                src={defaultEventOne}
                className="d-block w-100"
                alt="event1"
              />
            </div>
          )}

          {props.data[1] ? (
            <div className="carousel-item">
              <img
                src={props.data[1].eventImage}
                className="d-block w-100"
                alt={props.data[1].title}
              />
            </div>
          ) : (
            <div className="carousel-item">
              <img
                src={defaultEventTwo}
                className="d-block w-100"
                alt="event2"
              />
            </div>
          )}

          {props.data[2] ? (
            <div className="carousel-item">
              <img
                src={props.data[2].eventImage}
                className="d-block w-100"
                alt={props.data[2].title}
              />
            </div>
          ) : (
            <div className="carousel-item">
              <img
                src={defaultEventThree}
                className="d-block w-100"
                alt="event3"
              />
            </div>
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
