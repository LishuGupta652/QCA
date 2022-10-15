import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { APP_NAME } from "../config";
import { Container, Flex } from "../theme/global.styled";

const HeaderStyled = styled.header`
  grid-area: header;
  padding: 25px 0;
  background-color: #fff;

  nav ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;

    li {
      padding: 0 1rem;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Flex spaceBetween>
          <div className="logo">
            <h1>
              <span className="app_name"> {APP_NAME} </span>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>News</li>
              <li>Team</li>
              <li>Research</li>
              <li>Publications</li>
              <li>Resources</li>
            </ul>
          </nav>
        </Flex>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
