import React from "react";
import styled from "styled-components";
import HomeAbout from "../components/Home/HomeAbout";
import HomeBanner from "../components/Home/HomeBanner";
import ProfileCard from "../components/Home/ProfileCard";
import ResearchCard from "../components/Home/ResearchCard";
import ResearchTheme from "../components/Home/ResearchTheme";
import NewsHome from "../components/News/NewsHome";
import Template from "../components/Template";

import { Container } from "../theme/global.styled";

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
          <ResearchTheme />

          <NewsHome count={4} />
        </Container>
      </Template>
    </HomeStyled>
  );
};

export default Home;
