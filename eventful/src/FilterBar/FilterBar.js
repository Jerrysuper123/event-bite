import React from "react";
import { BASE_API_URL } from "../Utility";
import axios from "axios";
import "./style.css";

export default class FilterBar extends React.Component {
  state = {
    filterCategories: [],
    filterTags: [],
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

  render() {
    return (
      <nav
        id="filterBar"
        className="navbar navbar-expand-lg navbar-light bg-light shadow"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarFilter"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            filter
            <i class="fa-solid fa-filter"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarFilter">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-3"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.state.filterCategories.map((cat, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li>
                          <a className="dropdown-item" href="#">
                            {cat}
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </li>

              <li className="nav-item dropdown">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.state.filterTags.map((tag, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li>
                          <a className="dropdown-item" href="#">
                            {tag}
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
