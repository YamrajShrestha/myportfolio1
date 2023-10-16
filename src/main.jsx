import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./Components/Header";
import "./assets/style.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
