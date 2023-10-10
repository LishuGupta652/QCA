import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  z-index: 10000;
  * {
    z-index: 10000;
  }

  li {
    list-style: none;
  }
  .navbar {
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .nav-links a {
    color: black;
  }

  .logo {
    font-size: 32px;
  }

  .menu {
    display: flex;

    gap: 1em;

    font-size: 18px;
  }

  .menu li:hover {
    background-color: rgba(253, 203, 110, 0.5);

    border-radius: 5px;

    transition: 0.3s ease;
  }

  .menu li {
    padding: 5px 14px;
  }

  .services {
    position: relative;
  }

  .dropdown {
    background-color: #fafafa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 1em 0;
    position: absolute; /*WITH RESPECT TO PARENT*/
    display: none;
    border-radius: 8px;
    top: 35px;
    z-index: 1000;
  }

  .dropdown li + li {
    margin-top: 10px;
  }

  .dropdown li {
    padding: 0.5em 1em;

    width: 8em;

    text-align: center;
  }

  .dropdown li:hover {
  }

  .services:hover .dropdown {
    display: block;
  }

  /*RESPONSIVE NAVBAR MENU STARTS*/

  /* CHECKBOX HACK */

  input[type="checkbox"] {
    display: none;
  }

  /*HAMBURGER MENU*/

  .hamburger {
    display: none;

    font-size: 24px;

    user-select: none;
  }

  .logo img {
    width: 120px;
  }

  .logo {
    font-size: clamp(0.875rem, 0.675rem + 0.8vw, 1.4rem);

    a {
      color: black;
    }

    .sublogo {
      font-size: 16px;
    }
  }

  /* APPLYING MEDIA QUERIES */

  @media (max-width: 1200px) {
    .menu {
      display: none;
      background-color: #ababab;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      text-align: center;
      z-index: 1000;
    }

    .menu li:hover {
      display: inline-block;

      text-decoration: underline;

      transition: 0.3s ease;
      z-index: 1000;
    }

    .menu li + li {
      margin-top: 12px;
    }

    input[type="checkbox"]:checked ~ .menu {
      display: block;
    }

    .hamburger {
      display: block;
    }

    .dropdown {
      left: 50%;

      top: 30px;

      transform: translateX(35%);
    }

    .dropdown li:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById("checkbox_toggle").checked = false;
  }, [location]);
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
              <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />

                <label for="checkbox_toggle" class="hamburger">
                  &#9776;
                </label>

                <div class="menu">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/news">
                    <li>News</li>
                  </Link>
                  <Link to="/team">
                    <li>Team</li>
                  </Link>
                  <Link to="/research">
                    <li>Research</li>
                  </Link>
                  <Link to="/publications">
                    <li>Publications</li>
                  </Link>
                  <Link to="/resource">
                    <li>Resources</li>
                  </Link>
                </div>
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
