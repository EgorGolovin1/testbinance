import React from "react";
import ReactDOM from "react-dom/client";
import CryptoApp from "./CryptoApp";
import store from "./modules/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CryptoApp />
    </BrowserRouter>
  </Provider>
);
