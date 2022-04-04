import React from "react";
import { BASE_API_URL } from "./Utility";
import axios from "axios";
import NavBar from "./NavBar/NavBar";
import FilterBar from "./FilterBar/FilterBar";
import LandingPage from "./LandingPage/LandingPage";
import MapListing from "./MapListing/MapListing";
import CalendarListing from "./CalendarListing/CalendarListing";
import AddEvent from "./AddEvent/AddEvent";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    active: "map",
    data: [],
    userLocationLatLng: [],
    //to selectbox and dropdown
  };

  //add or update event or addEvent form
  addUpdateEvent = (newEvent) => {
    let newEventId = newEvent._id;

    //found the index of the the event and update it
    let indexToEdit = this.state.data.findIndex(
      (event) => event._id === newEventId
    );
    let clone = this.state.data.slice();
    clone[indexToEdit] = newEvent;
    this.setState({
      data: clone,
    });
  };

  getAllEventsFromAPI = async () => {
    console.log("get events api starts");
    try {
      let response = await axios.get(`${BASE_API_URL}/events`);
      console.log("API events", response.data.data);
      this.setState({
        data: [...response.data.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () => {
    await this.getAllEventsFromAPI();
  };

  setActive = (activePage) => {
    this.setState({
      active: activePage,
    });
  };

  searchEvent = async (searchString) => {
    try {
      let response = await axios.get(
        `${BASE_API_URL}/events?search=${searchString}`
      );
      // console.log("API events", response.data.data);
      this.setState({
        data: [...response.data.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  searchByDate = async (eventStartDate) => {
    try {
      let response = await axios.get(
        `${BASE_API_URL}/events?startDateTime=${eventStartDate}`
      );
      console.log("API events", response.data.data);
      this.setState({
        data: [...response.data.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  searchTags = async (tagsArray) => {
    try {
      let response = await axios.get(`${BASE_API_URL}/events`, {
        params: {
          searchTags: tagsArray,
        },
      });
      console.log("tag filtered", response.data.data);
      this.setState({
        data: [...response.data.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  searchCategories = async (catArray) => {
    try {
      let response = await axios.get(`${BASE_API_URL}/events`, {
        params: {
          searchCategories: catArray,
        },
      });

      this.setState({
        data: [...response.data.data],
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar setActive={this.setActive} />
        {this.state.active === "landing" ||
        this.state.active === "addNew" ? null : (
          <FilterBar
            searchEvent={this.searchEvent}
            searchByDate={this.searchByDate}
            searchTags={this.searchTags}
            searchCategories={this.searchCategories}
          />
        )}

        <LandingPage
          setActive={this.setActive}
          data={this.state.data}
          display={this.state.active === "landing" ? "block" : "none"}
        />
        <MapListing
          data={this.state.data}
          display={this.state.active === "map" ? "block" : "none"}
          getAllEventsFromAPI={this.getAllEventsFromAPI}
        />
        <CalendarListing
          data={this.state.data}
          display={this.state.active === "calendar" ? "block" : "none"}
        />
        <AddEvent
          display={this.state.active === "addNew" ? "block" : "none"}
          data={this.state.data}
          getAllEventsFromAPI={this.getAllEventsFromAPI}
        />
        <Footer
          setLandingActive={this.setActive}
          display={this.state.active === "map" ? "none" : "block"}
        />
      </React.Fragment>
    );
  }
}

export default App;
