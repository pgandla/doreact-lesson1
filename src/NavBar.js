import React from "react";

import { NavLink } from "react-router-dom";
import Post from "./Post";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <Post />
    </div>
  );
};
export default NavBar;
