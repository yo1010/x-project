import React, { Component } from "react";
import Fade from "react-reveal";

import logo from "../xyz.jpg";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <img
                src={logo}
                className="xyz-logo"
                style={{ width: "700px" }}
                alt="logo"
              />
            </Fade>
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-line-chart"></i>Chart
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-twitter"></i>Twitter
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
