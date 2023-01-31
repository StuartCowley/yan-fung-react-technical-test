import React from "react";
import Search from "./Search";
import nasaImage from "../styles/Images/nasa-logo.jpeg";
import "../styles/app.css";

function App() {
  return (
    <div className="app">
      <img className="nasa-logo"
        src={nasaImage}
        alt="nasa" 
      />
      <Search />
    </div>
  );
}

export default App;
