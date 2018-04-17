import React from "react";
import "./Nav.css";

const Nav = () => (
<div>
<ul className="nav nav-pills header-nav">
<li>
        <a className="nav-link" href="/home/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/about/'>About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/live/">Live</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sacraments/">Sacraments</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sermons/">Sermons</a>
      </li>
</ul>

</div>
);



export default Nav;
