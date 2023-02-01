import React from "react";
import "../styles/search_results.css"

const SearchResults = ({ results }) => {
  if (!results?.length) {
    console.log(results)
    return <p>No results</p>
  } else {
    return (
      <div className="search-results">
        {results.map((image, index) => {
          return (
            <img 
              className="search-results__image" 
              src={image} 
              alt="space_image" 
              key={index}
            />
          )
        })}
      </div>
    )
  }
}
export default SearchResults;
