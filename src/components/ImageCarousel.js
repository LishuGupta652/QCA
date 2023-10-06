import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImageCarouselStyled = styled.div`
  width: 100%;
  margin: 20px 0 60px 0;

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
`;

const ImageCarousel = ({ data, fit, setHeight }) => {
  return (
    <ImageCarouselStyled fit={fit} setHeight={setHeight}>
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
        {data?.map((item) => {
          return (
            <div>
              <img src={item?.image} />
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
