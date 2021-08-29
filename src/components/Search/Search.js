import React, { useState } from "react";
import Input from "../Input/Input";
import "./Search.css";

const Search = (props) => {
  const [keyword, setKeyword] = useState();

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("search");
  };

  return (
    <form className="search-bar" onSubmit={searchHandler}>
      <input
        type="search"
        placeholder="search"
        className="search-input"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
