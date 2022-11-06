import React from "react";
import styled from "styled-components";
import { RESEARCH_1, RESEARCH_2 } from "../../config";

const ResearchCardStyled = styled.div`
  .img-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 2rem 0;
    .img-grid-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const ResearchCard = () => {
  return (
    <ResearchCardStyled className="home-reasearch">
      <h1>Research</h1>
      <p>{RESEARCH_1}</p>

      <p>{RESEARCH_2}</p>

      <div className="img-grid">
        <div className="img-grid-item">
          <img src="https://via.placeholder.com/150" alt="" />
          <p>Image 1</p>
        </div>

        <div className="img-grid-item">
          <img src="https://via.placeholder.com/150" alt="" />
          <p>Image 2</p>
        </div>
        <div className="img-grid-item">
          <img src="https://via.placeholder.com/150" alt="" />
          <p>Image 2</p>
        </div>
        <div className="img-grid-item">
          <img src="https://via.placeholder.com/150" alt="" />
          <p>Image 2</p>
        </div>
      </div>
    </ResearchCardStyled>
  );
};

export default ResearchCard;
