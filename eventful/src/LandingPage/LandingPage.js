import React from "react";
import "./style.css";

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
                  src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/defaultEventOne.jpg"
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
                  src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/defaultEventThree.jpg"
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
                  src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/defaultEventTwo.jpg"
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

        {/* call to action on a map*/}
        <section className="cta p-5 text-center shadow">
          <h1>
            Have an
            <a
              className="navbar-brand logoText ms-3"
              style={{
                fontSize: "3rem",
              }}
            >
              eventful
            </a>
            day!
          </h1>
          <h5
            className="my-3"
            style={{
              fontStyle: "italic",
            }}
          >
            Check out TODAY's events near you on a map
          </h5>
          <button
            className="btn btn-danger mt-lg-4"
            style={{
              fontSize: "2rem",
            }}
            onClick={() => {
              props.setActive("map");
            }}
          >
            Start here
          </button>
        </section>
      </div>

      {/* call to action on calendar */}
      <section className="p-5 text-center my-4">
        <section>
          <div className="border-bottom"></div>
          <div className="d-flex justify-content-center">
            <h3 className="orStatement">or</h3>
          </div>
        </section>

        <h1>
          Plan an
          <a
            className="navbar-brand logoText ms-3"
            style={{
              fontSize: "3rem",
            }}
          >
            eventful
          </a>
          day?
        </h1>
        <h5
          className="my-3"
          style={{
            fontStyle: "italic",
          }}
        >
          Check out this MONTH's events on a calendar
        </h5>
        <button
          className="btn btn-info mt-3 text-light"
          style={{
            fontSize: "2rem",
          }}
          onClick={() => {
            props.setActive("calendar");
          }}
        >
          Start here
        </button>
      </section>

      <main>
        <article className="attendeeText accentTwoBgColor container-fluid p-5">
          {/* attend events section */}
          <section
            className="text-center my-5 text-light
          d-flex justify-content-center
          border-bottom
          "
          >
            <h1>ATTEND EVENTS</h1>
            <h4
              className="ms-4 pt-3"
              style={{
                fontStyle: "italic",
              }}
            >
              Automatically detects your current location and suggests events in
              the vicinity
            </h4>
          </section>
          <section className="ms-5">
            <div className="row g-5">
              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://github.com/Jerrysuper123/eventfulSources/blob/main/images/student.jpg?raw=true"
                    className="card-img-top"
                    alt="student"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR STUDENTS</h5>
                    <p className="cardText">
                      Browse through ongoing activities in school in one central
                      portal, without reading event posters/emails
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>

              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/shopper.jpg"
                    className="card-img-top"
                    alt="shopper"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR SHOPPER</h5>
                    <p className="card-text">
                      Scan all promotional activities nearby to get the best
                      deals
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>

              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/tourist.jpg"
                    className="card-img-top"
                    alt="tourist"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR TOURISTS</h5>
                    <p className="card-text">
                      Explore ongoing events onsite, without having to read
                      through the information pamphlet
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>

              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/diner.jpg"
                    className="card-img-top"
                    alt="diner"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR DINERS</h5>
                    <p className="card-text">
                      Grab the nearby cuisines with the offers from restaurants
                      at tantalizing prices
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>
            </div>
          </section>
        </article>

        {/* organize events section */}
        <article className="organizerText p-5">
          <section
            className="text-center my-5 text-light
          d-flex justify-content-center
          border-bottom
          "
          >
            <h1>ORGANIZE EVENTS</h1>
            <h4
              className="ms-4 pt-3"
              style={{
                fontStyle: "italic",
              }}
            >
              Publish your events in real-time and attract all guests in the
              vicinity
            </h4>
          </section>

          {/* timeline starts here */}
          <div className="timeline">
            <div className="containerTimeline left">
              <div className="content">
                <section>
                  <h5 className="card-title">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="ms-2">Step 1. create event</span>
                  </h5>
                  <div className="card-text">
                    <p>Create an event by clicking the button below</p>
                    <a
                      className="mb-2 nav-link text-center customBtn customBtnPrimary"
                      onClick={() => {
                        props.setActive("addNew");
                      }}
                    >
                      <span className="ms-2">add new event</span>
                    </a>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/create.jpg"
                    alt="create"
                  />
                </section>
              </div>
            </div>

            <div className="containerTimeline right">
              <div className="content">
                <section>
                  <h5 className="card-title">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="ms-2">Step 2. paste QR code</span>
                  </h5>
                  <div className="card-text">
                    <p>
                      Download the QR code image below and paste anywhere
                      noticeable in your area – encouraging people to check out
                      the nearby events
                    </p>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/paste.jpg"
                    alt="create"
                  />
                </section>
              </div>
            </div>
            <div className="containerTimeline left">
              <div className="content">
                <section>
                  <h5 className="card-title">
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="ms-2">
                      Step 3. relax and welcome guests
                    </span>
                  </h5>
                  <div className="card-text">
                    <p>
                      Anyone scanned the QR code would be taken to our website,
                      seeing your events on a map within walking distance
                    </p>
                  </div>
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/welcome.jpg"
                    alt="create"
                  />
                </section>
              </div>
            </div>
          </div>
          {/* timeline ends here */}
        </article>

        <section className="container mt-5 p-5 d-flex flex-column align-items-center justify-content-center">
          <h2>Download QR code below to promote your events</h2>
          <p>(Do not use, below for demo purpose only)</p>
          <img
            style={{
              width: "60%",
            }}
            src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/fakeQRCode.png"
            alt="QRCode"
          />
          <p className="subText">
            Disclaimer: The ongoing events in this app are dummy data, which are
            used for school project only. Do not take them as formal events from
            the official organizers.
          </p>
        </section>
      </main>
    </section>
  );
}
