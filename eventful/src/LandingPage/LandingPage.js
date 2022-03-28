import React from "react";
import "./style.css";
import defaultEventOne from "../images/defaultEventOne.jpg";
import defaultEventTwo from "../images/defaultEventTwo.jpg";
import defaultEventThree from "../images/defaultEventThree.jpg";
import Footer from "../Footer/Footer";

export default function LandingPage(props) {
  return (
    <section
      className="landingPage"
      style={{
        display: props.display,
      }}
    >
      {/* carousell starts here */}
      <div>
        <section
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
        </section>

        {/* call to action */}
        <section className="cta p-5">
          <h3>Check out events near you by clicking the button below</h3>
          <p>
            Automatically detects your current location and suggests events in
            vicinity
          </p>
          <p>
            Updates events in real-time, suggesting ongoing tantalizing events
            on a map near you
          </p>
          <button className="btn btn-danger">near me</button>
        </section>
      </div>

      <main>
        {/* main content */}

        <article className="container p-3 mt-3">
          <h3>For people attending events: </h3>
          <div className="row gx-5">
            <div className="col">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    for students
                  </h6>
                  <p className="card-text">
                    If you are a student, browse through ongoing activities in
                    school in one central portal, without reading event
                    posters/emails.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-solid fa-tags"></i>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">for shopper</h6>
                  <p className="card-text">
                    If you are a shopper, scan all promotional activities nearby
                    to get the best deals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-solid fa-person-walking-luggage"></i>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">for shopper</h6>
                  <p className="card-text">
                    If you are a tourist, explore ongoing events onsite, without
                    having to read through the information pamphlet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="organizerText mt-5 p-5">
          <h3>How to organize events with us? </h3>
          (hide this portion)
          <ul>
            <li> Create an event by clicking the button below </li>
            <li>
              Paste QR code below anywhere noticeable in your area – encouraging
              users to check out the nearby events{" "}
            </li>
            <li>
              Anyone scanned the QR code would be taken to our website, seeing
              your events on a map within walking distance{" "}
            </li>
          </ul>
          Sample Img of QR code, Image of QR code as a poster
        </article>
      </main>
      <Footer />
    </section>
  );
}
