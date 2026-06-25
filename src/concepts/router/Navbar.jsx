import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/users">Users</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/contact">Contact</NavLink>

    </nav>
  );
}