import "../NavBar/NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar__header">Beer Belly</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
