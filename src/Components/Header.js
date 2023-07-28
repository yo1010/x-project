import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

import logo from "../xyz.jpg";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg color="#FECF08" type="fountain" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a href="https://twitter.com/xyz">Twitter</a>
            </li>

            <li>
              <a href="https://t.me/xyz">Telegram</a>
            </li>

            <li>
              <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xcce85D0D11816ACCfA7b71045D391f5b77483405">
                Chart
              </a>
            </li>

            <li>
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0x96790eb54213F86d592Bb7180e40F6c62489472C">
                Buy
              </a>
            </li>
          </ul>
        </nav>

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
