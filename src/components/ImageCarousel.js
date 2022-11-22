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
        <div>
          <img src={require("../img/recentResearch/ETERM (1).png")}  />
          <p className="legend"><a href="https://ieeexplore.ieee.org/document/9891787" target="_blank" rel="noopener noreferrer">Fault-Tolerant Elastic Resource Management</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/ETERM (2).png")}  />
          <p className="legend"><a href="https://ieeexplore.ieee.org/document/9891787" target="_blank" rel="noopener noreferrer">Fault-Tolerant Elastic Resource Management</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/ETERM (3).png")}  />
          <p className="legend"><a href="https://ieeexplore.ieee.org/document/9891787" target="_blank" rel="noopener noreferrer">Fault-Tolerant Elastic Resource Management</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/HAMM (1).jpg")}  />
          <p className="legend"><a href="https://doi.org/10.1109/TSC.2022.3206417" target="_blank" rel="noopener noreferrer">Significance Rank-Driven High Availability</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/HAMM (2).jpg")}  />
          <p className="legend"><a href="https://doi.org/10.1109/TSC.2022.3206417" target="_blank" rel="noopener noreferrer">Significance Rank-Driven High Availability</a></p>
        </div>
        <div>
          <img src={require("../img/recentResearch/HAMM (3).jpg")}  />
          <p className="legend"><a href="https://doi.org/10.1109/TSC.2022.3206417" target="_blank" rel="noopener noreferrer">Significance Rank-Driven High Availability</a></p>
        </div>
      </Carousel>
    </ImageCarouselStyled>
  );
};

export default ImageCarousel;
