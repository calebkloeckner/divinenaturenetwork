import React from "react";
import "./Nav.css";

const Nav = () => (
<div className="pos-f-t">
<div className="collapse" id="navbarToggleExternalContent">
  <div className="">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={'/about/'}>About Us</a>
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
</div>
<nav className="navbar navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>
</div>
);



export default Nav;
