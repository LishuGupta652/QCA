import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GalleryConfig } from "../config";
import "react-tabs/style/react-tabs.css";
import CollaboratorCard from "../components/Team/CollaboratorCard";
import { Container } from "../theme/global.styled";

const GalleryStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: calc(100vh - 160px);

  h1 {
    text-align: center;
    margin: 2rem 0;
  }

  .flex2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 15px;
    margin: 50px auto;
  }

  .react-tabs__tab--selected {
    background-color: rgba(231, 76, 60, 0.5);
    color: black;
  }

  .teamDirector {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      object-position: 20% 25%;

      border-radius: 10px;
      height: auto;
      margin: 1rem 0;
    }
  }

  button {
    background-color: rgba(231, 76, 60, 0.2);
    margin: 20px 0;
    padding: 10px 30px;
    border-radius: 5px;
    color: #454545;
    margin-top: 30px;
    cursor: pointer;

    :hover {
      background-color: rgba(231, 76, 60, 0.3);
    }

    a {
      color: inherit;
    }
  }
`;

const Gallery = () => {
  return (
    <>
      <Header />
      <GalleryStyled>
        <Container>
          <div className="flex2">
            {GalleryConfig.map((profileCardConfig) => {
              return (
                <CollaboratorCard
                  {...profileCardConfig}
                  key={profileCardConfig?.title}
                />
              );
            })}
          </div>

          <a href="https://drive.google.com/" target="_blank" rel="noreferrer">
            <button>See More</button>
          </a>
        </Container>
      </GalleryStyled>
      <Footer />
    </>
  );
};

export default Gallery;
