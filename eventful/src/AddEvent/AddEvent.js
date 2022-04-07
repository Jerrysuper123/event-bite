import React from "react";
import axios from "axios";
import "./style.css";
import { BASE_API_URL, convertDateString } from "../Utility";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ModalBody from "../MapListing/EventDetailsPage/FeedbackForm.js/ModalBody.js/ModalBody";
import PostalCodeMap from "./PostalCodeMap/PostalCodeMap";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default class AddEvent extends React.Component {
  state = {
    active: "basicInfo",

    editedId: "",
    /*Basic info */
    title: "",
    organizer: "",
    category: "education",
    hashtags: ["party"],
    /*location */
    address: "",
    postalCode: "",
    latLng: [],
    /*date time*/
    startDateTime: "",
    endDateTime: "",
    /*main event image */
    eventImage: "",
    customizedMapMarker: "",
    brandColor: "#e27d60",
    /*description */
    descriptionSummary: "",
    description: "",
    reviews: [],

    //for loading the form
    formHashtags: [],
    formCategories: [],

    //to delete an event
    toDeletedEvent: {},

    // validation errors
    validateTitleError: "",
    validateOrganizerError: "",
    validateCatError:
      "Please select a category, otherwise it will default to education",
    validateAddError: "",
    validatePostalError: "",
    validateDateError: "Event start and end date is required",
    validateEventImageError: "",
    validateSummaryError: "",
    validateDescriptionError: "",
    submitted: false,
    mapUrlPath:
      "https://maps.google.com/maps?q=1.34771540923723,103.754994802909&hl=es;z=14&amp;output=embed",
  };

  clearAllData = () => {
    this.setState({
      editedId: "",
      /*Basic info */
      title: "",
      organizer: "",
      category: "education",
      hashtags: ["party"],
      /*location */
      address: "",
      postalCode: "",
      latLng: [],
      /*date time*/
      startDateTime: "",
      endDateTime: "",
      /*main event image */
      eventImage: "",
      customizedMapMarker: "",
      brandColor: "#e27d60",
      /*description */
      descriptionSummary: "",
      description: "",

      //to delete an event
      toDeletedEvent: {},

      // validation errors
      validateTitleError: "",
      validateOrganizerError: "",
      validateCatError:
        "Please select a category, otherwise it will default to education",
      validateAddError: "",
      validatePostalError: "",
      validateDateError: "Event start and end date is required",
      validateEventImageError: "",
      validateSummaryError: "",
      validateDescriptionError: "",
      // submitted: false,
    });
  };

  //Make sure no validation error to submit the form
  checkAllValidated = () => {
    if (
      this.state.validateTitleError === "" &&
      this.state.validateOrganizerError === "" &&
      this.state.validateCatError === "" &&
      this.state.validateAddError === "" &&
      this.state.validatePostalError === "" &&
      this.state.validateDateError === "" &&
      this.state.validateEventImageError === "" &&
      this.state.validateSummaryError === "" &&
      this.state.validateDescriptionError === ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  componentDidMount = async () => {
    try {
      let hashtagsRequest = axios.get(`${BASE_API_URL}/events/hashtags`);

      let categoriesRequest = axios.get(`${BASE_API_URL}/events/categories`);
      // console.log(response);
      let hashtagsResponse = await hashtagsRequest;
      let categoriesResponse = await categoriesRequest;

      this.setState({
        formHashtags: hashtagsResponse.data.data[0].hashtags,
        formCategories: categoriesResponse.data.data[0].categories,
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateActive = (active) => {
    this.setState({
      active: active,
    });
  };

  validationFunction(fieldName, inputValue) {
    if (fieldName === "title") {
      this.setState({
        validateTitleError: "Title is required and must be less than 10 words.",
      });
      if (inputValue.length > 2 && inputValue.split(" ").length < 10) {
        this.setState({
          validateTitleError: "",
        });
      }
    }

    if (fieldName === "organizer") {
      this.setState({
        validateOrganizerError: "Organizer name is required.",
      });
      if (inputValue.length > 1) {
        this.setState({
          validateOrganizerError: "",
        });
      }
    }

    if (fieldName === "category") {
      if (inputValue !== "") {
        this.setState({
          validateCatError: "",
        });
      }
    }

    if (fieldName === "address") {
      this.setState({
        validateAddError: "Address is required.",
      });
      if (inputValue.length > 2) {
        this.setState({
          validateAddError: "",
        });
      }
    }

    if (fieldName === "postalCode") {
      this.setState({
        validatePostalError: "Postal code is required.",
      });
      if (inputValue.length > 5) {
        this.setState({
          validatePostalError: "",
        });
      }
    }

    if (fieldName === "startDateTime") {
      if (this.state.startDateTime !== "") {
        this.setState({
          validateDateError: "Event end date is required.",
        });
        if (this.state.endDateTime !== "") {
          this.setState({
            validateDateError: "",
          });
          this.compareStartEndDate();
        }
      }
    }

    if (fieldName === "endDateTime") {
      if (this.state.endDateTime !== "") {
        this.setState({
          validateDateError: "Event start date is required.",
        });
        if (this.state.startDateTime !== "") {
          this.setState({
            validateDateError: "",
          });
          this.compareStartEndDate();
        }
      }
    }

    if (fieldName === "eventImage") {
      this.setState({
        validateEventImageError:
          "Image url is required and must be less than 10 words.",
      });
      if (inputValue.length > 2) {
        this.setState({
          validateEventImageError: "",
        });
      }
    }

    if (fieldName === "descriptionSummary") {
      this.setState({
        validateSummaryError: "Description summary is required.",
      });
      if (inputValue.length > 2) {
        this.setState({
          validateSummaryError: "",
        });
      }
    }

    if (fieldName === "description") {
      this.setState({
        validateDescriptionError: "Description is required.",
      });
      if (inputValue.length > 2) {
        this.setState({
          validateDescriptionError: "",
        });
      }
    }
  }

  compareStartEndDate = () => {
    console.log("compare date");
    if (this.state.startDateTime < this.state.endDateTime) {
      this.setState({
        validateDateError: "",
      });
    } else {
      this.setState({
        validateDateError: "Your event start time is behind its end time.",
      });
    }
  };

  updateFormField = async (e) => {
    let fieldName = e.target.name;
    let inputValue = e.target.value;
    await this.setState({
      [fieldName]: inputValue,
    });
    this.validationFunction(fieldName, inputValue);
  };

  updateLatLng = (e) => {
    let clone = this.state.latLng.slice();
    if (e.target.name === "lat") {
      clone[0] = Number(e.target.value);
      this.setState({
        latLng: clone,
      });
    } else if (e.target.name === "lng") {
      clone[1] = Number(e.target.value);
      this.setState({
        latLng: clone,
      });
    }
  };

  processCheckbox = (e) => {
    let currentValues = this.state[e.target.name];
    let modifiedValues;

    if (!currentValues.includes(e.target.value)) {
      modifiedValues = [...currentValues, e.target.value];
    } else {
      modifiedValues = currentValues.filter((element) => {
        return element !== e.target.value;
      });
    }

    this.setState({
      [e.target.name]: modifiedValues,
    });
  };

  getLatLng = async () => {
    // console.log("start retrieving Lat and lng");

    try {
      let response = await axios.get(
        `https://developers.onemap.sg/commonapi/search?searchVal=${this.state.postalCode}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
      );
      if (response.data.found === 0) {
        return `Postal code lat and lng not found; try change postal code again`;
      } else if (response.data.results[0]) {
        let lat = Number(response.data.results[0].LATITUDE);
        let lng = Number(response.data.results[0].LONGITUDE);
        this.setState({
          latLng: [lat, lng],
        });
      }
    } catch (e) {
      console.log(
        e,
        `oneMap API failed to retrieve the postal code ${this.state.postalCode}'s lat and lng`
      );
    }
  };

  getLatLngFromPostalCode = async (e) => {
    await this.updateFormField(e);
    if (this.state.postalCode.length !== 6) {
      this.setState({
        latLng: [],
      });
    }
    if (this.state.postalCode.length === 6) {
      await this.getLatLng();
      if (this.state.latLng.length === 0) {
        this.setState({
          validatePostalError:
            "The postal code does not exist. Please try again",
        });
      }
    }
  };

  postEvent = async () => {
    if (this.state.title !== "" && this.checkAllValidated()) {
      try {
        let response = await axios.post(`${BASE_API_URL}/events/create`, {
          title: this.state.title,
          organizer: this.state.organizer,
          category: this.state.category,
          hashtags: this.state.hashtags,
          address: this.state.address,
          postalCode: this.state.postalCode,
          latLng: this.state.latLng,
          startDateTime: this.state.startDateTime,
          endDateTime: this.state.endDateTime,
          eventImage: this.state.eventImage,
          customizedMapMarker: this.state.customizedMapMarker,
          brandColor: this.state.brandColor,
          descriptionSummary: this.state.descriptionSummary,
          description: this.state.description,
        });
        // console.log(response);
        // await this.props.getAllEventsFromAPI();
        await this.afterUserSubmitted(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  updateEventBegins = (eachEvent) => {
    this.setState({
      validateDescriptionError: "",
      validateCatError: "",
      validateDateError: "",
    });
    this.setState({
      editedId: eachEvent._id,
      title: eachEvent.title,
      organizer: eachEvent.organizer,
      category: eachEvent.category,
      hashtags: eachEvent.hashtags,
      address: eachEvent.address,
      postalCode: eachEvent.postalCode,
      latLng: eachEvent.latLng,
      startDateTime: eachEvent.startDateTime.slice(0, 16),
      endDateTime: eachEvent.endDateTime.slice(0, 16),
      eventImage: eachEvent.eventImage,
      customizedMapMarker: eachEvent.customizedMapMarker,
      brandColor: eachEvent.brandColor,
      descriptionSummary: eachEvent.descriptionSummary,
      description: eachEvent.description,
    });
  };

  updateEventAPI = async () => {
    if (this.checkAllValidated()) {
      try {
        let response = await axios.put(
          `${BASE_API_URL}/events/${this.state.editedId}/update`,
          {
            title: this.state.title,
            organizer: this.state.organizer,
            category: this.state.category,
            hashtags: this.state.hashtags,
            address: this.state.address,
            postalCode: this.state.postalCode,
            latLng: this.state.latLng,
            startDateTime: this.state.startDateTime,
            endDateTime: this.state.endDateTime,
            eventImage: this.state.eventImage,
            customizedMapMarker: this.state.customizedMapMarker,
            brandColor: this.state.brandColor,
            descriptionSummary: this.state.descriptionSummary,
            description: this.state.description,
          }
        );

        await this.afterUserSubmitted(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  afterUserSubmitted = async (response) => {
    if ((response.status = 200)) {
      this.setState({
        submitted: true,
      });
    }
    this.clearAllData();
    await this.props.getAllEventsFromAPI();
  };

  saveToDeletedEvent = (event) => {
    this.setState({
      toDeletedEvent: event,
    });
  };

  deleteEvent = async () => {
    try {
      let response = await axios.delete(
        `${BASE_API_URL}/events/${this.state.toDeletedEvent._id}/delete`
      );
      console.log(response);
      await this.props.getAllEventsFromAPI();
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event, values) => {
    this.setState({
      hashtags: values,
    });
  };

  renderFormPage = () => {
    if (this.state.active === "basicInfo") {
      return (
        <div className="basicInfo">
          <div>
            <h3>BASIC INFO</h3>
            <label>
              Event title<span className="validationColor"> *</span> :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="be clear and concise, limit to 10 words"
              value={this.state.title}
              name="title"
              onChange={this.updateFormField}
            />
            <p className="validationColor">{this.state.validateTitleError}</p>
          </div>

          <div>
            <label>
              Organizer <span className="validationColor"> *</span> :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="tell attendees who is organizing the event"
              value={this.state.organizer}
              name="organizer"
              onChange={this.updateFormField}
            />
            <p className="validationColor">
              {this.state.validateOrganizerError}
            </p>
            <p>This profile will appear in all events created by you.</p>
          </div>

          <div>
            <label>
              Select one category <span className="validationColor"> *</span> :
            </label>
            <select
              className="form-control"
              value={this.state.category}
              name="category"
              onChange={this.updateFormField}
            >
              {this.state.formCategories.map((cat) => {
                return <option>{cat}</option>;
              })}
            </select>
            <p className="validationColor">{this.state.validateCatError}</p>
          </div>

          <div>
            <label className="mb-3">Tags:</label>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={this.state.formHashtags}
              disableCloseOnSelect
              getOptionLabel={(option) => option}
              value={this.state.hashtags}
              renderOption={(props, option, { selected }) => (
                <li key={option} {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={this.state.hashtags.includes(option)}
                  />
                  {option}
                </li>
              )}
              onChange={this.handleChange}
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="select tags"
                  placeholder="more..."
                />
              )}
            />

            <div>
              {this.state.formHashtags
                ? this.state.formHashtags.map((tag) => {
                    return (
                      <React.Fragment key={tag}>
                        <span className="ms-2">
                          <input
                            type="checkbox"
                            name="hashtags"
                            value={tag}
                            checked={this.state.hashtags.includes(tag)}
                            onChange={this.processCheckbox}
                          />
                          <label className="ms-1 text-secondary">{tag}</label>
                        </span>
                      </React.Fragment>
                    );
                  })
                : null}
            </div>

            <p>
              Improve discoverability by adding tags relevant to subject matter
            </p>
            <div className="location border-top pt-5">
              <h3>LOCATION</h3>
              <div>
                <label>
                  Address <span className="validationColor"> *</span> :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="block no., street, floor and unit..."
                  value={this.state.address}
                  name="address"
                  onChange={this.updateFormField}
                />
                <p className="validationColor">{this.state.validateAddError}</p>
              </div>

              <div>
                <label>
                  Singapore postal <span className="validationColor"> *</span> :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="6-digit code"
                  value={this.state.postalCode}
                  name="postalCode"
                  onChange={this.getLatLngFromPostalCode}
                />
                <p className="validationColor">
                  {this.state.validatePostalError}
                </p>
              </div>
              <p>
                {this.state.validationError ? this.state.validationError : null}
              </p>

              <section>
                {this.state.latLng.length === 2 ? (
                  <PostalCodeMap latLng={this.state.latLng} />
                ) : null}
              </section>

              <p>Help people to know where to show up for your event</p>
            </div>
            <div className="dateTimeAdd border-top pt-5 border-bottom">
              <h3>DATE & TIME</h3>
              <div>
                <label>
                  Event starts <span className="validationColor"> *</span> :
                </label>
                <input
                  className="form-control"
                  type="datetime-local"
                  value={this.state.startDateTime}
                  name="startDateTime"
                  onChange={this.updateFormField}
                />
              </div>
              <div>
                <label>
                  Event ends <span className="validationColor"> *</span> :
                </label>
                <input
                  className="form-control"
                  type="datetime-local"
                  value={this.state.endDateTime}
                  name="endDateTime"
                  onChange={this.updateFormField}
                />
              </div>
              <p className="validationColor">{this.state.validateDateError}</p>
              <p>
                Tell event-goers when your event starts and ends so they can
                make plans to attend.
              </p>
            </div>
          </div>

          <section className="d-flex justify-content-end">
            <button
              className="customBtn customFormBtn"
              onClick={() => {
                this.updateActive("details");
              }}
            >
              next
            </button>
          </section>
        </div>
      );
    } else if (this.state.active === "details") {
      return (
        <React.Fragment>
          <section className="details">
            <div className="eventImage border-bottom">
              <h3>EVENT IMAGE</h3>
              <div>
                <label>
                  Main event image <span className="validationColor"> *</span> :
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="paste the image url here"
                  value={this.state.eventImage}
                  name="eventImage"
                  onChange={this.updateFormField}
                />
                <p className="validationColor">
                  {this.state.validateEventImageError}
                </p>
                <p>
                  This is the first image attendees will see at the top of your
                  listing. Use a high quality image.
                </p>
              </div>

              <div>
                <label>Custom map marker:</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="paste the icon url here"
                  value={this.state.customizedMapMarker}
                  name="customizedMapMarker"
                  onChange={this.updateFormField}
                />
                <p>
                  Your brand icons will be displayed on the map for branding
                  purpose
                </p>
              </div>

              <div>
                <label>Pick a brand color:</label>
                <div>
                  <input
                    type="color"
                    value={this.state.brandColor}
                    name="brandColor"
                    onChange={this.updateFormField}
                  />
                  <p>
                    Pick your brand color for branding purpose, otherwise it
                    will default to orange
                  </p>
                </div>
              </div>
            </div>
            <div className="description">
              <h3>DESCRIPTION</h3>
              <p>
                Add more details to your event like your schedule, sponsors, or
                featured guests.
              </p>
              <div>
                <label>
                  Summary <span className="validationColor"> *</span> :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="write a short summary to get attendees excited"
                  value={this.state.descriptionSummary}
                  name="descriptionSummary"
                  onChange={this.updateFormField}
                />
                <p className="validationColor">
                  {this.state.validateSummaryError}
                </p>
              </div>

              <div className="border-bottom pb-3">
                <label>
                  Detailed description{" "}
                  <span className="validationColor"> *</span> :
                </label>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="detailed description of the event"
                  value={this.state.description}
                  name="description"
                  onChange={this.updateFormField}
                />
                <p className="validationColor">
                  {this.state.validateDescriptionError}
                </p>
              </div>
              <section className="d-flex justify-content-end">
                <button
                  className="customBtn customFormBtn"
                  onClick={() => {
                    this.updateActive("publish");
                  }}
                >
                  next
                </button>
              </section>
            </div>
          </section>
        </React.Fragment>
      );
    } else if (this.state.active === "publish" && this.checkAllValidated()) {
      return (
        <React.Fragment>
          <h4>Review and publish your event</h4>
          <section>
            <img
              className="publishImage mb-4"
              src={this.state.eventImage ? this.state.eventImage : null}
              alt={this.state.title}
            />

            <ModalBody data={this.state} />
          </section>
          <section className="d-flex justify-content-end mt-5">
            {this.state.editedId === "" ? (
              <button
                className="customBtn customFormBtn"
                onClick={this.postEvent}
              >
                submit
              </button>
            ) : (
              <button
                className="customBtn customBtnAccentThree"
                onClick={this.updateEventAPI}
              >
                update
              </button>
            )}
          </section>
        </React.Fragment>
      );
    } else if (this.state.active === "publish" && this.state.submitted) {
      return (
        <section>
          <h4>You have successfully submitted your request</h4>
          <p>Thank you!</p>
        </section>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <main
          style={{
            display: this.props.display,
            // height: "80vh",
          }}
        >
          <section className="container-fluid mt-4">
            <div className="row">
              {/* form navgiation  */}

              {/* d-none */}
              <nav className="pt-lg-3 d-md-inline-flex shadow formNav col-lg-2 d-flex flex-lg-column justify-content-center justify-content-lg-start align-items-center ">
                <a
                  id="basicInfo"
                  className={
                    this.state.active === "basicInfo" ? "active" : null
                  }
                  onClick={() => {
                    this.updateActive("basicInfo");
                  }}
                >
                  1.basic info
                </a>

                <a
                  id="details"
                  className={this.state.active === "details" ? "active" : null}
                  onClick={() => {
                    this.updateActive("details");
                  }}
                >
                  2.details
                </a>

                <a
                  id="publish"
                  className={this.state.active === "publish" ? "active" : null}
                  onClick={() => {
                    this.updateActive("publish");
                  }}
                >
                  3.publish
                </a>
              </nav>

              {/* render each form page */}

              <div className="mainForm shadow col-lg-5 p-5">
                <section className="d-flex align-items-center mb-4">
                  <h1>
                    {this.state.editedId === ""
                      ? "Add New Event"
                      : "Update Event"}
                  </h1>
                  <button
                    className="customBtn customFormBtn ms-auto"
                    onClick={this.clearAllData}
                  >
                    reset
                  </button>
                </section>

                {this.renderFormPage()}
              </div>

              {/* bootstrap accordian */}
              <article
                className="col-lg-5 accordianContainer
                px-2 p-lg-5
                shadow
                accentThreeBgColor
            "
              >
                <div className="accordianBg shadow p-3 pt-4">
                  <h5 className="ms-5">Published events</h5>
                  <div
                    className="
            accordion 
            accordion-flush 
            container-fluid"
                    id="accordionFlushExample"
                  >
                    {this.props.data.map((eachEvent, index) => {
                      return (
                        <div className="accordion-item" key={eachEvent._id}>
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
                            <div
                              className="
                            accordion-button 
                            collapsed
                            "
                              data-bs-toggle="collapse"
                              data-bs-target={"#flush-collapse" + index}
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <span
                                style={{
                                  width: "10rem",
                                }}
                              >
                                {convertDateString(
                                  eachEvent.startDateTime
                                ).slice(4, 16)}
                              </span>
                              <span
                                className="ms-3 me-3"
                                style={{
                                  width: "24rem",
                                }}
                              >
                                {eachEvent.title.slice(0, 25)}...
                              </span>

                              <div
                                className="
                            organizerAccordian
                            d-flex
                            "
                              >
                                <span className="ms-auto me-3">
                                  {eachEvent.organizer}
                                </span>
                              </div>
                            </div>
                          </h2>
                          <div
                            id={"flush-collapse" + index}
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <img
                                className="publishedEventImage"
                                src={eachEvent.eventImage}
                              />
                              <h6>Date and time</h6>
                              <p>
                                {convertDateString(eachEvent.startDateTime)} -{" "}
                                {convertDateString(eachEvent.endDateTime)}{" "}
                                Singapore Standard Time
                              </p>
                              <h6>Location</h6>
                              <p>
                                {eachEvent.address} Singapore{" "}
                                {eachEvent.postalCode}
                              </p>
                              <h6>{eachEvent.descriptionSummary}</h6>
                              <h6>About this event</h6>
                              <p className="eventDescription">
                                {eachEvent.description.slice(0, 50)}...
                              </p>

                              <section className="d-flex justify-content-between">
                                <button
                                  className="customBtn customBtnAccentThree"
                                  onClick={() => {
                                    this.updateEventBegins(eachEvent);
                                  }}
                                >
                                  update
                                </button>

                                <button
                                  type="button"
                                  className="customBtn customBtnRed"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  onClick={() => {
                                    this.saveToDeletedEvent(eachEvent);
                                  }}
                                >
                                  delete
                                </button>
                              </section>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* pop up for warning to delete */}
          <div
            className="modal fade"
            id="deleteModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Are you sure you want to delete
                    <span className="ms-1">
                      {this.state.toDeletedEvent.title}
                    </span>
                    ?
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{this.state.toDeletedEvent.descriptionSummary}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="customBtn customBtnRed"
                    data-bs-dismiss="modal"
                    onClick={this.deleteEvent}
                  >
                    Confirm delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
