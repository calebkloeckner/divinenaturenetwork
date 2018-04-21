import React from "react";
import "../../index.css";
import "./Header.css";
import Jumbotron from "../Jumbotron/Jumbotron";
import Nav from "../Nav";

const Header = (props) =>(
  <div className="header-style">

    <div className="homeTitle">{props.home} </div>
    <div className="aboutTitle">{props.about} </div>
    <div>{props.video}</div>
    <div className="sermonTitle">{props.sermon}</div> 
    <div className="detailsTitle">{props.details}</div> 
    <div className="sacramentsTitle">{props.sacraments}</div>

    <Nav />
  </div>
);

  



export default Header;