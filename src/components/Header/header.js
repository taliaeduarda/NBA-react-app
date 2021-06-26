import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from "./SideNav/SideNav";
import "./Header.css";

export default function Header(props) {
    
  function navbars() {
    return (
      <div className="navbars">
        <FontAwesome name="bars"
        onClick={props.onHideNav} />
      </div>
    );
  }

  function logo() {
    return (
      <Link to="/" className="logo">
        <img alt="logo" src="/images/nba_logo.png" />
      </Link>
    );
  }

  return (
    <header className="header">
      <div className="header__options">
        <SideNav {...props}/>
        {navbars()}
        {logo()}
      </div>
    </header>
  );
}
