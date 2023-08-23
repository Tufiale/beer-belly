import "../NavMenu/NavMenu.scss";
import { Link } from "react-router-dom";

type NavMenuProps = {
  onClose: () => void;
};

const NavMenu = ({ onClose }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <Link to={"/"} className="nav-menu__home" onClick={onClose}>
        Home
      </Link>

      <Link to={"/filter"} className="nav-menu__filter" onClick={onClose}>
        Find Ya Beer
      </Link>
    </div>
  );
};
export default NavMenu;
