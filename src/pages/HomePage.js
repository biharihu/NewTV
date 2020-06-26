import React, { useState } from "react";

// Dependencies import
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

// Style import
import "./homePage.scss";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [loaded, setLoaded] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getData = (e) => {
    setDataLoading(true);

    axios
      .get(
        "https://pixabay.com/api/?key=17116025-59af6bf08512e84d50c227107&q=yellow+flowers&image_type=photo&pretty=true"
      )
      .then((res) => JSON.stringify(res.data.hits))
      .then((res) => JSON.parse(res))
      .then((res) => {
        setData(res);
        setTimeout(() => {
          setLoaded("loaded");
          setDataLoaded(true);
        }, 1500);
      })
      .catch((e) => alert("Someting Went wrong try again"));
  };

  return (
    <div className={`homePage ${loaded}`}>
      {/* Header */}
      <div className="header">
        <h1 className="header--title">NewTV</h1>
      </div>

      <div>
        {/* Loader */}

        {dataLoading && (
          <div id="loader-wrapper">
            <div id="loader"></div>

            <div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>
          </div>
        )}

        {/* Carousel */}

        {dataLoaded && (
          <Carousel
            pause={false}
            interval={2000}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {data.map((e, i) => (
              <Carousel.Item key={e.id}>
                <img
                  alt={e.tags}
                  className="imageCarousel"
                  src={e.largeImageURL}
                />

                <Carousel.Caption>
                  <h3 className="captionTitle">{e.tags}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>

      {/* Button */}

      {!dataLoading && (
        <button onClick={(e) => getData(e)} class={`bubbly-button`}>
          Watch Now
        </button>
      )}
    </div>
  );
};

export default HomePage;
