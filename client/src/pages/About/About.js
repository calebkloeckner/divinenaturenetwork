import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Header from "../../components/Header";
import "./About.css"
import { Media } from 'reactstrap';

import { Container, Row } from "../../components/Grid/index";

// import Sermons from "../Video/Sermons";


class About extends Component {
  
render() {
    return(
<div className="about-header" fluid>
    <div className="about-title">
            <Header about='About Us'/>
    </div>
    <Jumbotron>
        <h1>Test</h1>
    </Jumbotron>    
</div>
        ) 
    }
}


export default About;

