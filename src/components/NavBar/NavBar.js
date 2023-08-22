import CartWidget from "./CartWidget/CartWidget";
import magiclogo from "../assets/magiclogo.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="component">
      <div className="shopCart">
        <CartWidget />
      </div>
      <Link to="/">
        <img src={magiclogo} alt="logomagic" />
      </Link>
      <div className="optionsComponent">
        <NavLink
          to={`/category/Bundle/`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Productos
        </NavLink>
        <NavLink
          to={`/category/`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Work in Progress
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
