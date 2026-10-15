import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource-variable/mona-sans";
import "@fontsource-variable/hubot-sans";
import "@fontsource-variable/jetbrains-mono";

import "./i18n";
import { GlobalStyle } from "./styles/globalStyle";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
