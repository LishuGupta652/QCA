import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResearchCard from "../components/Home/ResearchCard";
import { Container } from "../theme/global.styled";

const ResearchProjectCard = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: calc(100vh - 200px);

  .projectCard {
    background-color: rgba(34, 34, 34, 0.1);
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    color: #454545;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    user-select: none;
  }
`;

const ResearchProjects = [
  {
    title:
      "Theoretical Investigation and Analysis of Different Architectures of Quantum Computing for Cyber Physical Systems",
    fundingAgency: "MPCST, Govt. of Madhya Pradesh",
    duration: "2023-2025",
  },
  {
    title:
      "Intelligent Real Time Situation Awareness and Detection Support System for Indian Defence",
    fundingAgency:
      "Defence Research and Development Organization, Govt. of India",
    duration: "2016-2018",
  },
  {
    title: "Adaptive Low Power System-on-Chip Architectures",
    fundingAgency: "Minister of Science, Technology and Innovation of Malaysia",
    duration: "2012-2014",
  },
  {
    title:
      "Design and Implementation of Power Efficient Algorithm for Information Signal Processing",
    fundingAgency:
      "Curtin Sarawak Collaborative Research, Curtin University of Technology, Malaysia",
    duration: "2009-2012",
  },
  {
    title: "An Efficient Logic Synthesis Approach with Testability Using MODD",
    fundingAgency:
      "Curtin Sarawak Research Fund, Curtin University of Technology, Malaysia",
    duration: "2008-2009",
  },
  {
    title:
      "Application of Decision Diagrams in Synthesis, Design and Testing of VLSI",
    fundingAgency: "Multimedia University, Malaysia",
    duration: "2003-2004",
  },
];

const Research = ({ isTitleCenter }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ResearchCard isTitleCenter />

        <ResearchProjectCard>
          <h2>Research Projects</h2>
          <ol>
            {ResearchProjects.map((project, index) => (
              <li key={project.title}>
                <div className="projectCard">
                  {project.title}
                  <br />
                  <span>Funded by {project.fundingAgency}</span>
                  <span>{project.duration}</span>
                </div>
              </li>
            ))}
          </ol>
        </ResearchProjectCard>
      </Container>
      <Footer />
    </>
  );
};

export default Research;
