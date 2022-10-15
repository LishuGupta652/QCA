import styled, { createGlobalStyle, css } from "styled-components";

export const lightTheme = {
  header: {
    nav: {
      background: "#fafafa",
      color: "#121212",
    },
  },
  colors: {
    background: "#fafafa",
    color: "#212121",
    green: "#2ecc71",
    greenTrans: "rgba(46, 204, 112, 0.1)",
    blue: "#30336b",
    red: "#ea2e91",
    footer: "#30336b",
    white: "#fafafa",
    lightBlack: "#838383",
  },
  mobile: "786px",
};

export const darkTheme = {
  header: {
    nav: {
      color: "#fafafa",
      background: "#212121",
    },
  },
  colors: {
    color: "#fafafa",
    background: "#212121",
    green: "#2ecc71",
    greenTrans: "rgba(46, 204, 112, 0.4)",
    blue: "#fafafa",
    red: "#ea2e91",
    footer: "#30336b",
    white: "#fafafa",
    lightBlack: "#838383",
  },
  mobile: "786px",
};

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) => props.spaceBetween && `justify-content: space-between;`}
  ${(props) => props.flexEnd && `justify-content: flex-end;`}
  ${(props) => props.alignTop && `align-items: top;`}
  ${(props) => props.noHeight && `height: 0 ;`}
`;

export const GlobalStyles = createGlobalStyle`

`;
