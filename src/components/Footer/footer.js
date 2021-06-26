import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { CURRENT_YEAR } from "../../config";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/" className="logoFooter">
        <img alt="nba logo" src="images/nba_logo.png" />
      </Link>
      <div className="right">@NBA {CURRENT_YEAR} All rights reserved.</div>
    </div>
  );
}
