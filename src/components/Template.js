import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const TemplateGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px 1fr 100px;

  grid-template-areas:
    "header header header header header header header header header header header header"
    "main main main main main main main main main main main main"
    "footer footer footer footer footer footer footer footer footer footer footer footer ";

  .main {
    grid-area: main;
  }
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 80px auto auto 100px;

    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
`;

const Template = (props) => {
  return (
    <TemplateGridStyled>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </TemplateGridStyled>
  );
};

export default Template;
