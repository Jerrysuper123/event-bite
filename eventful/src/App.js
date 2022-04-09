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
    active: "landing",
    data: [],
    userLocationLatLng: [],
    todayDate: "",
    mapData: [],
    userFilteredDate: "",
    componentMounted: false,
    loadedMap: false,
    //to selectbox and dropdown
  };

  componentDidUpdate = () => {
    if (this.state.active === "map") {
      //only when map is not loaded, then we load the map, to ensure we only load the map the first time
      if (!this.state.loadedMap) {
        this.setState({
          loadedMap: true,
        });
      }
    }
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

  // this fitler map's data to one day's events - today or any days user selected
  // default is today's date, if user chose to filter by date, a different date will be used
  FilterMapData = (filteredDate) => {
    this.setState({
      userFilteredDate: filteredDate,
    });
    console.log("Filter date", filteredDate);

    if (this.state.userFilteredDate === undefined) {
      this.setState({
        mapData: this.state.data.filter(
          (el) => el.startDateTime.slice(0, 10) === this.state.todayDate
        ),
      });
    } else {
      this.setState({
        mapData: this.state.data.filter(
          (el) => el.startDateTime.slice(0, 10) === this.state.userFilteredDate
        ),
      });
    }
  };

  // below get all events from API and filter only 1 day's events to map
  getAllEventsFromAPI = async () => {
    try {
      let response = await axios.get(`${BASE_API_URL}/events`);
      console.log(response.data.data);
      this.setState({
        data: [...response.data.data],
      });
      this.FilterMapData();
    } catch (e) {
      console.log(e);
    }
  };

  getTodayDateLocalTime = () => {
    let date = new Date();
    let year = date.getFullYear();
    //Jan is index 0, so plus 1 for getMonth()
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // we are using date string to filter data, so if the digit is less than 10, we add a 0 in front
    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  };

  //when app first loaded, create today's date for filter map data
  componentDidMount = async () => {
    this.setState({
      todayDate: this.getTodayDateLocalTime(),
    });

    await this.getAllEventsFromAPI();
    this.setState({
      componentMounted: true,
    });
  };

  // switch between different pages
  setActive = (activePage) => {
    this.setState({
      active: activePage,
    });
  };

  allInSearch = async (tagsArray, searchCatArray, startDateTime, searchStr) => {
    try {
      let response = await axios.get(`${BASE_API_URL}/events`, {
        params: {
          searchTags: tagsArray,
          searchCategories: searchCatArray,
          startDateTime: startDateTime,
          search: searchStr,
        },
      });
      // console.log("allInsearch filtered", response.data.data);
      this.setState({
        data: [...response.data.data],
      });

      // when user filter for event startDateTime, we also filter MapData as well
      this.FilterMapData(startDateTime);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <React.Fragment>
        <section
          style={{
            display: this.state.componentMounted ? "none" : "block",
          }}
        >
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <NavBar setActive={this.setActive} />
        {this.state.active === "landing" ? null : (
          <FilterBar
            allInSearch={this.allInSearch}
            dataLength={this.state.data.length}
            mapDataLength={this.state.mapData.length}
            getAllEventsFromAPI={this.getAllEventsFromAPI}
            FilterMapData={this.FilterMapData}
            // userFilteredDate={this.state.userFilteredDate}
          />
        )}

        <LandingPage
          setActive={this.setActive}
          data={this.state.data}
          display={this.state.active === "landing" ? "block" : "none"}
        />
        <MapListing
          data={this.state.mapData}
          display={this.state.active === "map" ? "block" : "none"}
          activeState={this.state.active}
          getAllEventsFromAPI={this.getAllEventsFromAPI}
          userFilteredDate={
            this.state.userFilteredDate === this.state.todayDate
              ? null
              : this.state.userFilteredDate
          }
          loadedMap={this.state.loadedMap}
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
