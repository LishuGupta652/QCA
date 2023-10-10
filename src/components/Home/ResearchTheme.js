import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { RESEARCH_THEME_1 } from "../../config";

const ResearchThemeStyled = styled.div`
  margin: 60px 0;

  p {
    margin: 1rem 0;
  }

  h1 {
    margin: 20px 0;
  }

  .cards {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(auto, 350px));
  }

  .card {
    border: 2px solid #e7e7e7;
    border-radius: 4px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card_body {
      padding: 1rem;
      h3 {
        margin: 0;

        font-size: 1.2rem;
        font-weight: 500;
      }

      p {
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    button {
      margin: 1rem 0;
      padding: 2px 5px;
      border: none;
      border-radius: 4px;
      background-color: #454545;
      color: white;
    }
  }
`;

const ResearchTheme = () => {
  return (
    <ResearchThemeStyled className="research-theme">
      <div className="cards">
        <Card
          title="Quantum Computing"
          description="In a world where classical computers are nearing their capacity, quantum computing offers the potential for groundbreaking advancements in areas like cryptography, optimization, and material science. At QMC, we focus on advancing quantum algorithms, especially machine learning algorithms, to harness the extraordinary capabilities of quantum systems. Collaborating with a dedicated team, we aim to develop practical applications that could transform our approach to complex problems in science and technology."
          image={require("../../img/quantum.png")}
        />
        <Card
          title="Machine Learning"
          description="Machine learning isn't just a technological advancement; it's a transformative force reshaping our perception and interaction with the world. At QMC, we deep dive into the captivating realm of machine learning, where I explore state-of-the-art techniques, algorithms, and their real-world applications. From predictive analytics to fraud detection, our work is centred around harnessing the full potential of artificial intelligence. Collaborating with a dynamic team of experts, we continuously strive to push the boundaries of what machine learning can accomplish, seeking to address practical challenges across various domains. "
          image={require("../../img/artificial.png")}
        />
        <Card
          title="Cloud Computing"
          description="Cloud computing is a transformative paradigm providing seamless access to vast digital resources, enabling innovation and reshaping how we work and live. At QMC, we delve into the dynamic realm of cloud computing, where we explore emerging technologies, scalable architectures, and innovative solutions. From optimizing resource allocation in the cloud to enhancing security within distributed systems, our work is centred on unlocking the full potential of cloud technology. We continuously strive to expand the boundaries of what cloud computing can offer, addressing real-world challenges and contributing to the evolution of IT infrastructure. "
          image={require("../../img/cloud.png")}
        />
      </div>
    </ResearchThemeStyled>
  );
};

const Card = ({ image, title, description }) => {
  const [show, setShow] = React.useState(false);
  const [smallDesc, setSmallDesc] = React.useState(
    description.substring(0, 210) + "..."
  );

  return (
    <div className="card">
      <img src={image} alt={title} loading={"lazy"} />
      <div className="card_body">
        <h3>{title}</h3>
        <p>
          {smallDesc}{" "}
          <button
            onClick={() => {
              setShow(!show);
              if (show) {
                setSmallDesc(description.substring(0, 200) + "...");
              } else {
                setSmallDesc(description);
              }
            }}
          >
            {show ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ResearchTheme;
