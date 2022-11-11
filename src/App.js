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
import COTBlog01 from "./pages/COTBlog01";
import News from "./pages/News";

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
                <Route path="/news" element={<News />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/cloud-of-things-blog01" element={<COTBlog01 />} />
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
