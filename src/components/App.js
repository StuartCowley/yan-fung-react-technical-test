import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import nasaImage from "../styles/Images/nasa-logo.jpeg";
import "../styles/app.css";

function App() {
  const [searchResults, setsearchResults] = useState();
  
  return (
    <div className="app">
      <img className="nasa-logo"
        src={nasaImage}
        alt="nasa" 
      />
      <Search setsearchResults={setsearchResults} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
