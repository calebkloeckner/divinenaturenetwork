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
    <div className="jumbotron">
        <p>WHO WE ARE…
“If we live with Him, and associate with Him we shall ascend with Him and be assumed with Him into Heaven. And that not merely when we depart this life, but even Now. Rather, He will take us up and glorify us with Himself, and bestow on us the enjoyment of eternal benefits.”
St. Symeon the New Theologian</p>

<p>This website provides a bold approach to Kingdom spirituality where Divine Identity and Purpose is unveiled to enlighten and empower those who know there has got to be more. Our goal is to reveal a mystical perception of Christian spirituality without compromising the truth delivered by Christ through His apostles.</p>

<p>You are not just a mere human having a spiritual experience; you are an eternal spirit having a human experience, and the Divine Nature Network is here to assist you discovering your Divine Destiny. You were created in Christ and downloaded with Holy Ghost technology. Before you were formed in your mothers womb you were known, called, and saved by God for His good pleasure.</p>

<p>2 Peter 1:4
…By means of these He has bestowed on us His precious and exceedingly great promises, so that through them you may escape [by flight] from the moral decay (rottenness and corruption) that is in the world because of covetousness (lust and greed), and become sharers (partakers) of the Divine Nature. (AMP)</p>

<p>The Divine Nature Network is your resource for Divine Enlightenment. Empowerment, and Encouragement. We look forward to the journey of Divine Discovery as we go from faith to faith, grace to grace, and glory to glory. Welcome!</p>
    </div>    
</div>
        ) 
    }
}


export default About;

