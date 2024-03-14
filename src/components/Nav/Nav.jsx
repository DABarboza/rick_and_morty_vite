import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import s from "./nav.module.css";
import { useNavigate, Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <button onClick={() => navigate("/home")} className={s.button}>
        HOME
      </button>
      <button onClick={() => navigate("/about")} className={s.button}>
        ABOUTE
      </button>
      <button onClick={() => navigate("/favorites")} className={s.button}>
        FAVORITES
      </button>
      <SearchBar className={s.searchBar} onSearch={onSearch} />
    </div>
  );
};

export default Nav;
