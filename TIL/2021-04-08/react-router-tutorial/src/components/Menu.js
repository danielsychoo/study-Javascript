import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeStyle = {
    color: "green",
    fontSize: "2rem",
  };
  const activeClassName = "clicked";

  return (
    <div>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={activeStyle}
            activeClassName={activeClassName}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            activeStyle={activeStyle}
            activeClassName={activeClassName}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about/foo"
            activeStyle={activeStyle}
            activeClassName={activeClassName}
          >
            About foo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            activeStyle={activeStyle}
            activeClassName={activeClassName}
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
