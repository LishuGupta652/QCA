import "./css/app.css";

// components
import styled, { ThemeProvider } from "styled-components";
// BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";
// Context api
import { Theme } from "./contextapi/ThemeContext";
import { useContext } from "react";
import NotFound from "./pages/NotFound";
import { GlobalStyles, lightTheme, darkTheme } from "./theme/global.styled";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Publications from "./pages/Publications";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

function App() {
  const [theme, setTheme] = useContext(Theme);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <motion.div
          animate={{ x: "-150%" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="animated-overlay"
        />
        <StyledApp>
          <GlobalStyles />
          <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Teams />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
