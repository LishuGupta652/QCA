import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImageCarouselStyled = styled.div`
  width: 100%;

  .legend {
    color: white;
  }

  li * {
    color: white;
  }

  img {
    object-fit: ${(props) => (props.fit ? props.fit : "contain")};
    height: ${(props) => (props.setHeight ? "460px" : "auto")};
  }

  .slider-wrapper {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
  }
`;

const ImageCarousel = ({ data, fit, setHeight }) => {
  return (
    <ImageCarouselStyled fit={fit} setHeight={setHeight}>
      <Carousel
        autoPlay
        showThumbs={false}
        onSwipeMove
        emulateTouch
        infiniteLoop
        swipeable
      >
        {data?.map((item) => {
          return (
            <div key={item?.title || item}>
              <img src={item?.image} alt={item?.title} />
              <p className="legend">
                <a href={item?.link} target="_blank" rel="noopener noreferrer">
                  {item?.title}
                </a>
              </p>
            </div>
          );
        })}
      </Carousel>
    </ImageCarouselStyled>
  );
};

export default ImageCarousel;
