import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

import logo from "../xxxx.png";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg color="#FECF08" type="tadpole" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a href="https://twitter.com/XXXXStrewth">Twitter</a>
            </li>

            <li>
              <a href="https://t.me/xxxxstrewth">Telegram</a>
            </li>

            <li>
              <a href="#portfolio">Chart</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <img
                src={logo}
                className="xxxx-logo"
                style={{ maxWidth: "500px" }}
                alt="logo"
              />
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Queensland, Strewth mate!</h3>
            </Fade>
            <hr />
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

        <p className="scrolldown">
          <a className="smoothscroll" href="#resume">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
