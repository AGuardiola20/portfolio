import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme.ts";
import GlobalStyles from "./GlobalStyles.tsx";
import { BrowserRouter } from "react-router";

// TODO: Crear la funcionalidad de escoger el tema

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
