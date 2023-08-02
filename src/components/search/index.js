import React, { useRef } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const Search = () => {
  let timeout;

  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (event) => {
    event.preventDefault();

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const searchQuery = {
        name: searchInputRef.current.value
      };

      const query = createSearchParams(searchQuery);

      navigate({
        pathname: "/search",
        search: `?${query}`
      });
    }, 500);
  };

  return (
    <form className="search-form">
      <input type="text" className="search" ref={searchInputRef} placeholder="Search" onInput={onSearchHandler} />
    </form>
  );
};

export default Search;
