import React from "react";
import "./style.css";
import defaultEventOne from "../images/defaultEventOne.jpg";
import defaultEventTwo from "../images/defaultEventTwo.jpg";
import defaultEventThree from "../images/defaultEventThree.jpg";
import Footer from "../Footer/Footer";
import student from "../images/student.jpg";
import tourist from "../images/tourist.jpg";
import shopper from "../images/shopper.jpg";
import diner from "../images/diner.jpg";
import create from "../images/create.jpg";
import paste from "../images/paste.jpg";
import welcome from "../images/welcome.jpg";

export default function LandingPage(props) {
  return (
    <section
      className="landingPage"
      style={{
        display: props.display,
      }}
    >
      {/* carousell starts here */}
      <div className="banner">
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

        <article className="attendeeText container p-1 mt-3">
          <h2 className="text-center my-5 primaryColor">Attend events </h2>
          <div className="row g-5">
            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <img src={student} className="card-img-top" alt="student" />
                <div className="card-body">
                  <h5 className="card-title">FOR STUDENTS</h5>
                  <p className="card-text">
                    Browse through ongoing activities in school in one central
                    portal, without reading event posters/emails.
                  </p>
                </div>
              </div>
              {/* card ends here */}
            </div>

            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <img src={shopper} className="card-img-top" alt="shopper" />
                <div className="card-body">
                  <h5 className="card-title">FOR SHOPPER</h5>
                  <p className="card-text">
                    Scan all promotional activities nearby to get the best
                    deals.
                  </p>
                </div>
              </div>
              {/* card ends here */}
            </div>

            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <img src={tourist} className="card-img-top" alt="tourist" />
                <div className="card-body">
                  <h5 className="card-title">FOR TOURISTS</h5>
                  <p className="card-text">
                    Explore ongoing events onsite, without having to read
                    through the information pamphlet.
                  </p>
                </div>
              </div>
              {/* card ends here */}
            </div>

            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "18rem", border: "none" }}>
                <img src={diner} className="card-img-top" alt="diner" />
                <div className="card-body">
                  <h5 className="card-title">FOR DINERS</h5>
                  <p className="card-text">
                    Grab the nearby cuisines with the offers from restaurants at
                    tantalizing prices
                  </p>
                </div>
              </div>
              {/* card ends here */}
            </div>
          </div>
        </article>

        <article className="organizerText mt-5 p-5">
          <h2 className="text-center text-light mb-5">Organize events </h2>
          <div className="row g-5">
            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "25rem", border: "none" }}>
                <img src={create} className="card-img-top" alt="create" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i class="fa-solid fa-circle-check"></i>
                    <span className="ms-2">Step 1. create event</span>
                  </h5>
                  <div className="card-text">
                    <p>Create an event by clicking the button below</p>
                    <a
                      className="nav-link text-center border"
                      onClick={() => {
                        props.setActive("addNew");
                      }}
                    >
                      <i className="navIcon fa-solid fa-circle-plus"></i>
                      <span className="ms-2 navText">add new event</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* card ends here */}
            </div>

            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "25rem", border: "none" }}>
                <img src={paste} className="card-img-top" alt="paste" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i class="fa-solid fa-circle-check"></i>
                    <span className="ms-2">Step 2. paste QR code</span>
                  </h5>
                  <p className="card-text">
                    Paste QR code below anywhere noticeable in your area –
                    encouraging users to check out the nearby events
                  </p>
                </div>
              </div>
              {/* card ends here */}
            </div>

            <div className="col">
              {/* card starts here */}
              <div className="card" style={{ width: "25rem", border: "none" }}>
                <img src={welcome} className="card-img-top" alt="welcome" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i class="fa-solid fa-circle-check"></i>
                    <span className="ms-2">
                      Step 3. relax and welcome guests
                    </span>
                  </h5>
                  <p className="card-text">
                    Anyone scanned the QR code would be taken to our website,
                    seeing your events on a map within walking distance{" "}
                  </p>
                </div>
              </div>
              {/* card ends here */}
            </div>
          </div>
        </article>

        <sectio className="container mt-5 p-5">image of QR code</sectio>
      </main>
    </section>
  );
}
