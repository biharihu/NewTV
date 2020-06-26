import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// Style import
import "./homePage.scss";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homePage">
      <div className="header">
        <h1 className="header--title">NewTV</h1>
      </div>

      <div>
        <Carousel interval={500} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div
              style={{ background: "red", height: "90vh", width: "100%" }}
            ></div>

            <Carousel.Caption>
              <h3>First </h3>
              <p>Nulla</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ background: "green", height: "90vh", width: "100%" }}
            ></div>

            <Carousel.Caption>
              <h3>Second</h3>
              <p>Lorem</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ background: "blue", height: "90vh", width: "100%" }}
            ></div>

            <Carousel.Caption>
              <h3>Third</h3>
              <p>Praesent</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
