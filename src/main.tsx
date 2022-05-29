import React from "react";
import ReactDOM from "react-dom/client";
import styled, { ThemeProvider } from "styled-components";
import { barksideTheme } from "./barksideTheme";
import { GlobalStyle } from "./globalStyle";
import App from "./App";

const Root = styled.div`
  display: flex;
  position: relative;
  justify-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 414px;
  margin: 0 auto;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={barksideTheme}>
      <GlobalStyle />
      <Root>
        <App />
      </Root>
    </ThemeProvider>
  </React.StrictMode>
);
