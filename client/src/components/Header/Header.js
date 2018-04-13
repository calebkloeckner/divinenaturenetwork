import React from "react";
import "../../index.css";
import "./Header.css";
import Jumbotron from "../Jumbotron/Jumbotron";

const Header = (props) =>(
  <div>

    <div className="homeTitle">{props.home} </div>
    <div className="aboutTitle">{props.about} </div>
    <div>{props.video}</div>
  
  </div>
);

  



export default Header;