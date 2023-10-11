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
          <li> Funded by Defence Research and Development Organization, Govt. of India - 
            Intelligent Real Time Situation Awareness and Detection Support System for Indian Defence  [2016-2018]
          </li>
          <li>Funded by Minister of Science, Technology and Innovation of Malaysia, Malaysia - 
            Adaptive Low Power System-on-Chip Architectures [2012-2014].
          </li>
          <li>Funded by Curtin Sarawak Collaborative Research, Curtin University of Technology, Malaysia - 
          Design and Implementation of Power Efficient Algorithm for Information Signal Processing [2009-2012] 
          </li>
          <li>
          Funded by CSRF, Curtin University of Technology, Malaysia - An Efficient Logic Synthesis Approach with Testability Using MODD [2008-2009]
          </li>
          <li>
          Funded by Multimedia University, Malaysia - Application of Decision Diagrams in Synthesis, Design and Testing of VLSI [2003-2004]
          </li>
        </ol>

        




      </Container>
      <Footer />
    </>
  );
};

export default Research;
