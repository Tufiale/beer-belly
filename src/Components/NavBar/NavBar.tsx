import "../NavBar/NavBar.scss";
import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <button className="navbar__button" onClick={toggleNav}>
        Menu
      </button>
      {showNav && <NavMenu onClose={toggleNav} />}
    </nav>
  );
};

export default NavBar;
