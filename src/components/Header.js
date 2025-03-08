import React from "react";
import { useNavigate } from "react-router-dom";

const Header=()=> {
  const navigate = useNavigate();
  const doSearch = (e) =>{
    e.preventDefault();
    const query = e.target.search.value;
    e.target.reset()
    return navigate (`./search?q=${query}`)
  }
  return (
    <header className="header">
      {/* Icon */}
      <div className="logo">
        <img src="./clapperboard_white.png" alt="Logo" />
      </div>
      <div className="title" >
        MovieVault
      </div>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={doSearch}>
        <input type="search" className="form-control" placeholder="Search..." name="search" />
          <button className="search-button">
            <img src="/search_icon.png" alt="search button" className="search-icon" />
          </button>
      </form>
    </header>
  );
}

export default Header;


