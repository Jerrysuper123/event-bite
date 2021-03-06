import React from "react";
import { BASE_API_URL } from "../Utility";
import axios from "axios";
import filter from "../images/filter.png";
import clearFilter from "../images/clearFilter.png";

import "./style.css";

export default class FilterBar extends React.Component {
  state = {
    filterCategories: [],
    filterTags: [],
    dateTimeFilter: "",

    // search parameters from user
    searchString: "",
    searchEventStartDate: "",
    searchCategories: [],
    searchHashtags: [],

    //Fiter on or not
    filterOn: false,
  };

  switchFilterOnOff = () => {
    if (
      this.state.searchString !== "" ||
      this.state.searchEventStartDate !== "" ||
      this.state.searchCategories.length !== 0 ||
      this.state.searchHashtags.length !== 0
    ) {
      this.setState({
        filterOn: true,
      });
    } else {
      this.setState({
        filterOn: false,
      });
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
        filterTags: hashtagsResponse.data.data[0].hashtags,
        filterCategories: categoriesResponse.data.data[0].categories,
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // searchString: "",
  // searchEventStartDate: "",
  // searchCategories: [],
  // searchHashtags: [],
  searchEventByString = async (e) => {
    await this.updateFormField(e);
    await setTimeout(() => {
      this.props.allInSearch(
        this.state.searchHashtags,
        this.state.searchCategories,
        this.state.searchEventStartDate,
        this.state.searchString
      );
    }, 700);
  };

  updateFormFieldAndSearchByDate = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("search date starts", this.state.searchEventStartDate);
    await this.props.allInSearch(
      this.state.searchHashtags,
      this.state.searchCategories,
      this.state.searchEventStartDate,
      this.state.searchString
    );

    this.props.FilterMapData(e.target.value);
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

  processCheckboxAndGetCats = async (e) => {
    /*we have to put await here to update the checkbox before the api call */
    await this.processCheckbox(e);
    await this.props.allInSearch(
      this.state.searchHashtags,
      this.state.searchCategories,
      this.state.searchEventStartDate,
      this.state.searchString
    );
  };

  processCheckboxAndGetTags = async (e) => {
    /*we have to put await here to update the checkbox before the api call */
    await this.processCheckbox(e);
    await this.props.allInSearch(
      this.state.searchHashtags,
      this.state.searchCategories,
      this.state.searchEventStartDate,
      this.state.searchString
    );
  };

  resetFilter = () => {
    this.setState({
      searchString: "",
      searchEventStartDate: "",
      searchCategories: [],
      searchHashtags: [],
    });
    this.props.getAllEventsFromAPI();
  };

  renderFilteredItems = () => {
    return (
      <React.Fragment>
        <span
          className="
        searchedItems"
        >
          {this.state.searchString.slice(0, 5)}{" "}
        </span>
        <span className="searchedItems">{this.state.searchCategories[0]} </span>
        <span className="searchedItems"> {this.state.searchHashtags[0]} </span>
        <span className="searchedItems">
          {this.state.searchEventStartDate}{" "}
        </span>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav
          id="filterBar"
          className="navbar navbar-expand-lg navbar-light bg-light shadow"
        >
          <div className="container-fluid">
            <button
              className="filterToggler navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarFilter"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                filter
              </span>
              <img src={filter} alt="filter" style={{ width: "1rem" }} />
            </button>

            <div className="collapse navbar-collapse" id="navbarFilter">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown ms-lg-3 p-3">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    category
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {this.state.filterCategories.map((cat, index) => {
                      return (
                        <React.Fragment key={index}>
                          <li>
                            <a className="dropdown-item border-bottom" href="#">
                              <input
                                type="checkbox"
                                name="searchCategories"
                                id={cat}
                                value={cat}
                                checked={this.state.searchCategories.includes(
                                  cat
                                )}
                                onChange={this.processCheckboxAndGetCats}
                              />
                              <label className="ms-1" htmlFor={cat}>
                                {cat}
                              </label>
                            </a>
                          </li>
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </li>

                <li className="nav-item dropdown p-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    tags
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {this.state.filterTags.map((tag, index) => {
                      return (
                        <React.Fragment key={index}>
                          <li>
                            <a className="dropdown-item border-bottom" href="#">
                              <input
                                type="checkbox"
                                id={tag}
                                name="searchHashtags"
                                value={tag}
                                checked={this.state.searchHashtags.includes(
                                  tag
                                )}
                                onChange={this.processCheckboxAndGetTags}
                              />
                              <label className="ms-1" htmlFor={tag}>
                                {tag}
                              </label>
                            </a>
                          </li>
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </li>

                <li className="nav-item dropdown p-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    date
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="d-flex p-3">
                      <label>From date:</label>
                      <input
                        className="form-control me-2"
                        type="date"
                        aria-label="Search"
                        name="searchEventStartDate"
                        value={this.state.searchEventStartDate}
                        onChange={this.updateFormFieldAndSearchByDate}
                      />
                    </div>
                  </ul>
                </li>
              </ul>

              <section className="searchSection d-flex p-3">
                <span className="filterSearchInput d-flex align-items-center">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    className="me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    name="searchString"
                    value={this.state.searchString}
                    onChange={this.searchEventByString}
                  />
                </span>

                {/* <button
                  className="btn btn-outline-success me-3"
                  type="submit"
                  onClick={() => {
                    this.props.searchEvent(this.state.searchString);
                  }}
                >
                  Search
                </button> */}
              </section>

              <div className="clearFilterBtn m-2" onClick={this.resetFilter}>
                clear filters
                <img
                  style={{
                    width: "1rem",
                  }}
                  src={clearFilter}
                  alt="clearFilter"
                />
              </div>
            </div>
          </div>
        </nav>
        {/* filtered results summary */}
        {this.state.searchString !== "" ||
        this.state.searchEventStartDate !== "" ||
        this.state.searchCategories.length !== 0 ||
        this.state.searchHashtags.length !== 0 ? (
          <section
            className="
                filteredResultSummary
                d-flex justify-content-center align-items-center"
          >
            <span className="d-flex flex-column flex-sm-row">
              <span>
                Searched {this.renderFilteredItems()}
                and found:
              </span>

              <span>
                <span className="ms-1">
                  map ({this.props.mapDataLength} results)
                </span>
                <span className="ms-1">
                  calendar ({this.props.dataLength} results)
                </span>
              </span>
            </span>

            {/* sort and clear filter button */}
            <span className="d-flex align-items-center flex-column flex-lg-row">
              <span className="nav-item dropdown">
                {/* not gonna built sort currently */}
                {/* <span
                        className="nav-link dropdown-toggle sortBtn"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        sort
                      </span> */}
                {/* this only shows up on map */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>title</li>
                  <li>date</li>
                </ul>
              </span>
            </span>
          </section>
        ) : null}
      </React.Fragment>
    );
  }
}
