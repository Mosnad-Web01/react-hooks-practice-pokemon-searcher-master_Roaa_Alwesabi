import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Pokemon"
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
