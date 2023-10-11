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
      </Container>
      <h2>Research Projects</h2>
      <Footer />
    </>
  );
};

export default Research;
