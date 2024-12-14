import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme.ts";
import GlobalStyles from "./GlobalStyles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
