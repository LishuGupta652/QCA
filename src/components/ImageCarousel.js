import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImageCarouselStyled = styled.div`
  width: 100%;
  margin-top: 40px;

  .legend {
    color: white;
  }

  li *{
    color: white;
  }
`;

const ImageCarousel = () => {
  return (
    <ImageCarouselStyled>
      <Carousel
        width="600px"
        dynamicHeight="300px"
        autoPlay
        showThumbs={false}
        onSwipeMove
        emulateTouch
        infiniteLoop
        swipeable
      >
        <div>
          <img src={require("../img/recentResearch/eqnn1.jpg")} alt="" />
          <p className="legend"><a href="https://ieeexplore.ieee.org/document/9428529" target="_blank" rel="noopener noreferrer">Quantum Approach to Forecast Cloud Workloads</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/eqnn2.jpg")}  />
          <p className="legend"><a href="https://ieeexplore.ieee.org/document/9428529" target="_blank" rel="noopener noreferrer">Quantum Approach to Forecast Cloud Workloads</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/eqnn3.jpg")}  />
          <p className="legend"><a href="https://ieeexplore.ieee.org/document/9428529" target="_blank" rel="noopener noreferrer">Quantum Approach to Forecast Cloud Workloads</a></p>
        </div>
      </Carousel>
    </ImageCarouselStyled>
  );
};

export default ImageCarousel;
