import React, { Component } from "react";
import { Search } from "../Search/Search";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/#">
            iNekaBudeFilm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        <Search/>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </nav>
      </header>
    );
  }
}

export default Header;
