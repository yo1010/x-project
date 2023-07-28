import React, { Component } from "react";
import Fade from "react-reveal";

import logo from "../xyz.jpg";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <Fade top>
              <img
                src={logo}
                className="xyz-logo"
                style={{ width: "700px" }}
                alt="logo"
              />
            </Fade>
            <Fade bottom>
              <h5>
                Welcome to Project XYZ, a mysterious and enigmatic crypto coin
                that promises to be unlike any other in the digital currency
                landscape. Step into a world filled with secrets, puzzles, and
                intrigue as you embark on a journey to uncover the hidden
                mysteries behind the XYZ coin. This project aims to challenge
                the minds of crypto enthusiasts, puzzle solvers, and
                codebreakers alike, pushing the boundaries of what's possible in
                the world of blockchain technology.
              </h5>
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
