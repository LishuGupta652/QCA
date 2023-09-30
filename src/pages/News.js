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
