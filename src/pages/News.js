import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
`;

const News = () => {
  return (
    <NewsStyled>
      <Header />

      <Container>
        <h1>News</h1>

        <div className="article">
          <ol>
            <li>
              <Link to="/cloud-of-things-blog01">
                Call for book chapters on Cloud of Things: Foundations,
                Applications, and Challenges.
              </Link>
            </li>
          </ol>
        </div>
      </Container>
    </NewsStyled>
  );
};

export default News;
