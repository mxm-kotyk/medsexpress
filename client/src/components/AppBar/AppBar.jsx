import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Shopping Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
