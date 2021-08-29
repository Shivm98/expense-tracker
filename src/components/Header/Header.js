import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Search from "../Search/Search";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <Search />
      <Link className="header-btn btn green" to="/new-expense">
        add new
      </Link>
    </header>
  );
};

export default Header;
