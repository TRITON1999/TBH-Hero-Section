import React from "react";

function Navbar() {
  return (
    <div className="navbar upp">
      {/* <nav className="navbar">
      <div className="navbar-overlay">
        <button type="button" onClick={toggleMenuOpen()}/>
      </div>
    </nav> */}
      <div className="navbar-logo">
        <img src={require("./logo.png")} alt="logo" /> <span>TBH-Circle</span>
      </div>
      <div className="navbar-content"></div>
    </div>
  );
}

export default Navbar;
