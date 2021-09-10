import React from "react";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <meta
          property="og:title"
          content="Alfa Prima - Sistem Informasi Akademik"
        />
        <meta
          name="description"
          content="Sistem Informasi Akademik - Alfa Prima"
        />
      </Helmet>
      <Helmet>
        <body className="bg-light" />
      </Helmet>
    </HelmetProvider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
