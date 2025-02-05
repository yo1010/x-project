import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row" style={{ position: "relative", zIndex: 5 }}>
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
