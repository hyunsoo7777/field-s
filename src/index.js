import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale="ko">
    <App />
  </IntlProvider>
);
