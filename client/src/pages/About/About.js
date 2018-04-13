import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Header from "../../components/Header";

import { Container, Row } from "../../components/Grid/index";
// import Sermons from "../Video/Sermons";


class About extends Component {
  
render() {
    return(
        <div className="about-header">
    <Header about='About Us'/>
    <h1>A little about us</h1>
    
        </div>
        
        )
        
    }
}





export default About;

