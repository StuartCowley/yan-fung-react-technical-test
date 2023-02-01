import React from "react";
import "../styles/search_results.css"

const SearchResults = ({ searchResults }) => {
  return (
    <>
      <p>
        Search Results
      </p>
      <img className="moon-image" src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="moon" />
    </>
  )
}

export default SearchResults;
