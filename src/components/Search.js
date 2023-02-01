import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-input" 
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submit-button" type="submit">GO!</button>
      </form>
    </>
  )
}

export default Search;
