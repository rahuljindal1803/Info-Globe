import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import APIProvider from "./context/APIContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>
);
