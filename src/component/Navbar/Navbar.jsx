import React from "react";
import "../Navbar/styleNavbar.scss";
import logo from "../../Images/Logo.jpg";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} height={160} width={700} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
