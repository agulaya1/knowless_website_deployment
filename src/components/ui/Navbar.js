import { Link } from "react-router-dom";
import { useState } from "react";

// import { ReactComponent as MenuButton } from "../icons/menu-button.svg";
import * as HiIcons from "react-icons/hi";

import KnowlessLogo from "../../logos/knowless_logo_outline_black.png";
import "../../styles/Navbar.css";

import Sidebar from './Sidebar.js';
import IconFormat from "../IconFormat";
import resetColor from "../resetState.js";

const Navbar = () => {

  const [sideMenu, setSideMenu] = useState(false);

  const changeMenuState = () => {
    setSideMenu(!sideMenu); 
  }

  return (
    <nav className="navbar" id="navbar-id">
      {/* name */}
      <div className="left-section">
        <h2 className="knowless">
          <Link to="/">knowless</Link>
        </h2>
        <Link to="/">
          <p>est. 2019</p>
        </Link>
      </div>

      {/* logo */}
      <div className="middle-section">
        <img src={KnowlessLogo} className="knowless-logo" alt="knowless logo" />
      </div>

      {/* all the links */}
      <div className="right-section">
        <HiIcons.HiMenu onClick={changeMenuState} className="menu-button" viewBox="0 0 20 20"/>
        <Sidebar sideMenuStatus={sideMenu} setSideMenu={() => setSideMenu(!sideMenu)}/>
        <div className="website-links-section">
          <Link to="/about" className="website-links about" onClick={resetColor}>
            about
          </Link>
          <Link to="/contact" className="website-links contact" onClick={resetColor}>
            contact
          </Link>
        </div>
        <div className="icon-section">
          <IconFormat />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
