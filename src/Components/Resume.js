import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education" style={{ textAlign: "center" }}>
            <div className="three columns header-col">
              <h1>
                <span>Taxes</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <h2>
                <span>1/1</span>
              </h2>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work" style={{ textAlign: "center" }}>
            <div className="three columns header-col">
              <h1>
                <span>Supply</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <h2>
                <span>26,439,111</span>
              </h2>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
