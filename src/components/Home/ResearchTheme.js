import React from "react";
import styled from "styled-components";
import { RESEARCH_THEME_1 } from "../../config";

const ResearchThemeStyled = styled.div`
  margin: 60px 0;

  p {
    margin: 1rem 0;
  }
`;

const ResearchTheme = () => {
  return (
    <ResearchThemeStyled className="research-theme">
      <h1>Research Themes</h1>

      <p>{RESEARCH_THEME_1}</p>
    </ResearchThemeStyled>
  );
};

export default ResearchTheme;
