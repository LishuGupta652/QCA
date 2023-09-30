import React from "react";
import styled from "styled-components";
import { APP_NAME } from "../config";
import { Container } from "../theme/global.styled";

const FooterStyled = styled.div`
  grid-area: footer;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  height: 100%;
  background-color: #454545;
  color: white;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
      <Container>
        <div>
          {APP_NAME} @ {currentYear}
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
