import "../NavBar/NavBar.scss";
import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import menu from "../../images/menu.svg";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <button className="navbar__button" onClick={toggleNav}>
        <img src={menu} alt="burgermenu" />
      </button>
      <h1 className="navbar__header">Beer Belly</h1>
      {showNav && <NavMenu onClose={toggleNav} />}
    </nav>
  );
};

export default NavBar;
