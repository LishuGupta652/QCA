import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Flex } from "../theme/global.styled";

const HeaderStyled = styled.header`
  grid-area: header;
  align-self: center;
  background-color: #fff;

  .logo img {
    width: 120px;
  }

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
            <Link to="/">
              <span className="app_name">
                <img src={require("../img/logo.png")} alt="" />
              </span>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>News</li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
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
