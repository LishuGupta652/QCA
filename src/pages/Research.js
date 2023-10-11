import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResearchCard from "../components/Home/ResearchCard";
import { Container } from "../theme/global.styled";

const Research = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ResearchCard isTitleCenter />

        <h2>Research Projects</h2>
        <ol>
          <li> Defence Research and Development Organization Funding - 
              Intelligent Real Time Situation Awareness and Detection Support System for Indian Defence  [2016-2018]
          </li>
        </ol>
      </Container>
      <Footer />
    </>
  );
};

export default Research;
