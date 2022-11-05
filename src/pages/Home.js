import React from "react";
import styled from "styled-components";
import HomeBanner from "../components/Home/HomeBanner";
import Template from "../components/Template";
import {
  APP_NAME,
  AUTHOR_DESC,
  AUTHOR_IMAGE,
  AUTHOR_NAME,
  HEADLINE_1,
  RESEARCH_1,
  RESEARCH_2,
  RESEARCH_THEME_1,
} from "../config";
import { Container } from "../theme/global.styled";

const ProfileCardStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 0;

  .left-circle {
    width: 250px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }
  img {
    width: 120px;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }

  .right {
    .author_name {
      font-size: 1rem;
      font-weight: 500;
    }
    .author_desc {
      font-size: 0.8rem;
    }

    background-color: #f5f5f5;
    padding: 30px;
    border-right: 5px solid #000;
  }
`;

function ProfileCard() {
  return (
    <ProfileCardStyled className="profile-card">
      <img src={require("../img/prof.png")} alt={`${AUTHOR_NAME}`} />
      <div className="right">
        <p>
          <span className="author_name" style={{ marginRight: 10 }}>
            {AUTHOR_NAME}
          </span>
          <span className="author_desc">{AUTHOR_DESC}</span>
        </p>
      </div>
    </ProfileCardStyled>
  );
}

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

function ResearchCard() {
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
}

function HomeAbout() {
  return (
    <div className="home_about">
      <h1>
        Welcome to <span className="app_name">{APP_NAME} </span>
      </h1>

      <p>{HEADLINE_1}</p>
    </div>
  );
}

const ResearchThemeStyled = styled.div`
  margin: 60px 0;

  p {
    margin: 1rem 0;
  }
`;

function ResearchTheme() {
  return (
    <ResearchThemeStyled className="research-theme">
      <h1>Research Themes</h1>

      <p>{RESEARCH_THEME_1}</p>
    </ResearchThemeStyled>
  );
}

const HomeStyled = styled.div``;
const Home = () => {
  return (
    <HomeStyled>
      <Template>
        <Container>
          <HomeBanner />
          <HomeAbout />
          <ProfileCard />
          <ResearchCard />
          <ResearchTheme></ResearchTheme>{" "}
        </Container>
      </Template>
    </HomeStyled>
  );
};

export default Home;
