import logo from "../assets/MP34.png";
import React from "react";
export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Fluxio logo" className="logo-img" />
      </div>

      <nav className="header-right">
        <span>About</span>
        <span>Q&amp;A</span>
        <span>GitHub</span>
      </nav>
    </header>
  );
}

