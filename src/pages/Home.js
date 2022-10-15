import React from "react";
import styled from "styled-components";
import HomeBanner from "../components/Home/HomeBanner";
import Template from "../components/Template";
import { APP_NAME, AUTHOR_IMAGE, AUTHOR_NAME } from "../config";
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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right {
    .author_name {
      font-size: 1rem;
      font-weight: 500;
    }

    background-color: #f5f5f5;
    padding: 30px;
    border-right: 5px solid #000;
  }
`;

function ProfileCard() {
  return (
    <ProfileCardStyled className="profile-card">
      <div className="left-circle">
        <img src={AUTHOR_IMAGE} alt={`${AUTHOR_NAME}`} />
      </div>
      <div className="right">
        <p>
          <span className="author_name" style={{ marginRight: 10 }}>
            {AUTHOR_NAME}
          </span>
          leads the IDSL research group. He is an assistant professor in the
          Department of Computer Science and School of Engineering at the
          University of British Columbia, as well as an adjunct assistant
          professor in the Department of Systems Design Engineering at the
          University of Waterloo (UW).
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
      <p>
        Our research bridges together intelligent systems, data science,
        software engineering, and decision making under uncertainty.
      </p>

      <p>Check out some of our recent publications in various domains:</p>

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

      <p>
        QCA is a research group at the University of Waterloo, Canada. We are a
        multidisciplinary team of researchers and students working towards the
        dev elopment of Cyber Physical Systems (CPS) that are capable of
        learning and adapting to their environment.
      </p>
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

      <p>
        We are witnessing exponential advancements in development and deployment
        of IoT systems, smart infrastructures, and our dependency on these
        systems. The overall vision of IDSL is to develop tools that will help
        resolve software issues much faster, and advance toward better system
        safety, security, and resiliency. Automated reasoning of these systems
        play a key role in understanding system behavior, verification, run-time
        monitoring, anomaly detection, and intrusion detection.
      </p>

      <p>
        Computational research in the domain of data driven software engineering
        gets complicated with the amount of data that one needs to process to
        reach an outcome. IDSL conducts data mining, software engineering, and
        machine learning research with a focus on safety-critical software
        systems to ensure that modern day safety-critical systems are safe,
        secure, and resilient. Behavior of software systems is modelled using
        formal specifications. Formal specifications are used to develop
        monitoring systems that ensure system safety and security, debugging,
        program comprehension, and other software engineering applications.
        Verification of artificial intelligence based software that are
        beginning to be a new standard for a large number of safety-critical
        applications is shown to be a NP-complete problem
      </p>

      <p>
        We often collaborate with industry partners and other academic
        researchers for problem-solving in specific domains. For a list of our
        projects and collaborators, please visit our Research page:
      </p>
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
