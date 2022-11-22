import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImageCarouselStyled = styled.div`
  width: 100%;
  margin-top: 40px;
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
          <img src="../../img/recentResearch/eqnn1.jpg" />
          <p className="legend"><a href="#" onClick="MyWindow=window.open('https://ieeexplore.ieee.org/document/9428529','MyWindow','width=300,height=200'); return false;">Quantum Approach to Forecast Cloud Workloads</a></p>
        </div>
        <div>
          <img src="../../img/recentResearch/eqnn2.jpg" />
          <p className="legend">Quantum Approach to Forecast Cloud Workloads</p>
        </div>
        <div>
          <img src="../../img/recentResearch/eqnn3.jpg" />
          <p className="legend">Quantum Approach to Forecast Cloud Workloads</p>
        </div>
      </Carousel>
    </ImageCarouselStyled>
  );
};

export default ImageCarousel;
