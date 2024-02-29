import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import s from "./nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={s.container}>
      <SearchBar className={s.searchBar} onSearch={onSearch} />
    </div>
  );
};

export default Nav;
