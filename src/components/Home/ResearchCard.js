import React from "react";
import styled from "styled-components";
import { RESEARCH_1, RESEARCH_2 } from "../../config";
import GridImage3 from "../GridImage3";
import ImageCarousel from "../ImageCarousel";
import ResearchTheme from "./ResearchTheme";

const ResearchCardStyled = styled.div`
  width: 100%;
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

  .flex {
    display: flex;
    gap: 1rem;
  }

  .title {
    text-align: ${({ isTitleCenter }) => (isTitleCenter ? "center" : "left")};

    margin: 2rem 0;
  }
`;

const ResearchData = [
  {
    image: require("../../img/recentResearch/FT.jpg"),
    title: "Fault-Tolerant Elastic Resource Management",
    link: "https://doi.org/10.1109/TNSM.2022.3170379",
    id: 1,
  },
  {
    image: require("../../img/recentResearch/EQNN.jpg"),
    title: "Quantum Approach to Forecast Cloud Workloads",
    link: "https://doi.org/10.1109/TPDS.2021.3079341",
    id: 2,
  },
  {
    image: require("../../img/recentResearch/HAMM.jpg"),
    title: "Significance Rank-Driven High Availability",
    link: "https://doi.org/10.1109/TSC.2022.3206417",
    id: 3,
  },
];

const BookData = [
  {
    image: require("../../img/recentResearch/quantumDot.jpg"),
    title:
      "Quantum-Dot Cellular Automata Based Digital Logic Circuits: A Design Perspective",
    link: "https://link.springer.com/book/10.1007/978-981-15-1823-2",
    id: 1,
  },
  {
    image: require("../../img/recentResearch/Design.jpg"),
    title: "Design and Testing of Reversible Logic",
    link: "https://link.springer.com/book/10.1007/978-981-13-8821-7#editorsandaffiliations",
    id: 2,
  },
];

const ResearchCard = ({ isTitleCenter }) => {
  return (
    <ResearchCardStyled
      className="home-reasearch"
      isTitleCenter={isTitleCenter}
    >
      {!isTitleCenter && <h1 className="title">Research</h1>}
      <p>{RESEARCH_1}</p>
      <ResearchTheme />

      <p>{RESEARCH_2}</p>

      <div className="flex">
        <ImageCarousel data={ResearchData} fit={"cover"} />
        {/* <ImageCarousel data={BookData} fit={"contain"} setHeight={true} /> */}
        {/* <GridImage3 /> */}
      </div>
    </ResearchCardStyled>
  );
};

export default ResearchCard;
