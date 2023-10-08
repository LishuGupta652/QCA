import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../theme/global.styled";

const NewsStyled = styled.div`
  h1 {
    margin: 4rem 0 1rem 0;
  }

  ol {
    li {
      margin-left: 1.5rem;

      font-size: 1.2rem;
    }
  }
  .article {
    min-height: 72vh;
  }
`;

export const NewsList = [
  <>
    Call for papers (special section) on {" "} <a href="https://www.journals.elsevier.com/computers-and-electrical-engineering%20/call-for-papers/explainable-artificial-intelligence-xai-methods-applications-and-challenges-vsi-xai">
    eXplainable Artificial Intelligence (XAI): Methods, Applications, and Challenges (VSI-xai)
    </a> in <a href="https://www.sciencedirect.com/journal/computers-and-electrical-engineering">Computers and Electrical Engineering</a>, Elsevier (SCIE Indexed, IF=4.152)
  </>,
  <>
  Research Paper entitled <i>Performance Analysis of Machine Learning Centered
    Workload Prediction Models for Cloud</i> is accepted for publication in <i>IEEE
      Transactions on Parallel and Distributed Systems</i>
  </>,
  <>
  Dr. Deepika Saxena has joined has joined The University of Aizu, Japan as Associate Professor.
  </>,
  <>
  Dr. Rishabh Gupta has joined The University of Aizu, Japan as Post-Doc Research Associate.
  </>,
  <>
    Call for papers <a href="https://rtip2r-conference.org/2023/index.html">The 6th International Conference on Recent Trends in Image Processing & Pattern Recognition (RTIP2R)</a>, University in Derby (United Kingdom)
  </>,
  <>
    Call for book chapters on{" "}
    <Link to="/cloud-of-things-blog01">
      Cloud of Things: Foundations, Applications, and Challenges.
    </Link>
  </>,
  <>
    Dr. Sakshi Patni has received a Post-Doc offer from Department of Conputer
    Science and Engineering, National Sun Yat-Sen University, Taiwan.
  </>,
  <>
    Ms. Deepika Saxena has joined Frankfurt Institute of Advanced Studies,
    Goethe University, Frankfurt, Germany as Post-Doc Research Associate.
  </>,
  <>
    Dr. Hari Mohan Gaur has joined School of Computer Science, Engineering, and
    Technology, Bennett University, India as Assistant Professor.
  </>,
  <>
    Dr. Ishu Gupta joined Department of Conputer Science and Engineering,
    National Sun Yat-Sen University, Taiwan as Post-doc Research Associate.
  </>,
];

const News = () => {
  return (
    <>
      <Header />
      <NewsStyled>
        <Container>
          <h1>News</h1>

          <div className="article">
            <ol>
              {NewsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </Container>
      </NewsStyled>
      <Footer />
    </>
  );
};

export default News;
