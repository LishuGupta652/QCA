import React from "react";
import styled from "styled-components";

const GridImageStyled = styled.div`
  --col1: 1fr;
  --col2: 1fr;
  --col3: 1fr;
  --row1: 1fr;
  --row2: 1fr;
  --row3: 1fr;
  --cl-main: #676767;
  --cl-text: white;
  width: 100%;
  margin: 20px;
  .grid {
    display: grid;
    grid-template-columns: var(--col1) var(--col2) var(--col3);
    grid-template-rows: var(--row1) var(--row2) var(--row3);
    height: 100%;
    transition: all 0.2s;
    background-color: var(--cl-main);
  }

  .grid:has(.item:nth-child(3n + 1):hover) {
    --col1: 3fr;
  }

  .grid:has(.item:nth-child(3n + 2):hover) {
    --col2: 3fr;
  }

  .grid:has(.item:nth-child(3n + 3):hover) {
    --col3: 3fr;
  }
  .grid:has(.item:nth-child(n + 1):nth-child(-n + 3):where(:hover, :focus)) {
    --row1: 3fr;
  }
  .grid:has(.item:nth-child(n + 4):nth-child(-n + 6):where(:hover, :focus)) {
    --row2: 3fr;
  }

  .grid:has(.item:nth-child(n + 7):nth-child(-n + 9):hover) {
    --row3: 3fr;
  }

  .item {
    text-align: center;
    display: grid;
    align-content: center;
    transition: scale 0.2s;
    overflow: hidden;
    border: 2px solid var(--cl-text);
    background-color: var(--cl-main);
    font-size: 6rem;
    color: var(--cl-text);
  }

  .item:where(:hover, :focus) {
    scale: 1.1;
    z-index: 2;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GridImage3 = () => {
  return (
    <GridImageStyled>
      <div className="grid">
        <div className="item" tabindex="0">
          <img
            src={require("../img/recentResearch/quantumDot.jpg")}
            alt="random"
          />
        </div>
        <div className="item" tabindex="0">
          2
        </div>
        <div className="item" tabindex="0">
          3
        </div>
        <div className="item" tabindex="0">
          4
        </div>
        <div className="item" tabindex="0">
          5
        </div>
        <div className="item" tabindex="0">
          6
        </div>
        <div className="item" tabindex="0">
          7
        </div>
        <div className="item" tabindex="0">
          8
        </div>
        <div className="item" tabindex="0">
          9
        </div>
      </div>
    </GridImageStyled>
  );
};

export default GridImage3;
