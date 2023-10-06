import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Flex } from "../theme/global.styled";

const HeaderStyled = styled.header`
  grid-area: header;
  align-self: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  .logo img {
    width: 120px;
  }

  nav ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

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
    <>
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
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/research">Research</Link>
                </li>
                <li>
                  <Link to="/publications">Publications</Link>
                </li>
                <li>Resources</li>
              </ul>
            </nav>
          </Flex>
        </Container>
      </HeaderStyled>
      <div
        className="height100"
        style={{
          height: "100px",
        }}
      ></div>
    </>
  );
};

export default Header;
