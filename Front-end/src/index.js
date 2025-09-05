import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, FutureConfigProvider } from "react-router-dom";
import App from "./App";

const futureConfig = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

ReactDOM.render(
  <FutureConfigProvider future={futureConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FutureConfigProvider>,
  document.getElementById("root")
);