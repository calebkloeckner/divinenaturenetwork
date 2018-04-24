import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Header from "../../components/Header";

import { Card, Button, Slider, Slide, Col, CardTitle, CardPanel } from 'react-materialize';
import { Container, Row } from "../../components/Grid/index";
// import Sermons from "../Video/Sermons";
import Nav from "../../components/Nav";
import Facebook from "../../components/Facebook";
import Footer from "../../components/Footer";
import './Home.css';


export default class Home extends Component {
  render() {
    return(
      <div>
      <Row>
        
      <Slider>
  <Slide
    src="https://pixnio.com/free-images/2017/12/19/2017-12-19-23-23-21-1200x785.jpg"
    title="DNN"
    placement="left">
    The Divine Nature Network
  </Slide>
  <Slide
    src="https://pixnio.com/free-images/2017/12/16/2017-12-16-09-37-01-1200x647.jpg"
    title="DNN"
    placement="right">
   The Divine Nature Network
  </Slide>
  <Slide
    src="https://pixnio.com/free-images/2017/12/15/2017-12-15-15-28-15-1200x800.jpg"
    title="DNN"
    placement="left">
    The Divine Nature Network
  </Slide>
</Slider>
</Row>
<div className="container">
<Col s={3} className="center">
      <h1>Man is not just a human having a spiritual experience; he is a Spirit having a human experience.</h1>
</Col>
<Col>
<div s={5}>
<div className="donate-card">
<Card className='small'
  header={<CardTitle image='http://kb4images.com/images/high-quality-wallpapers/37902558-high-quality-wallpapers.jpg'>Donate</CardTitle>}
  actions={[<a href='https://www.paypal.com/donate/?token=Ml9LxfQnhERVqOrHt4-YRIBauT3x79vx4-EeMjBHBnRWi7-IaHnW703KWYb47tYxSoyyFG&country.x=US&locale.x=US'>Click here to donate.</a>]}>
  <p>There is a Divine Connection between our resources and our relationships. Your heart will follow your treasure!</p>
</Card>
</div>
<Card className='small'
  header={<CardTitle image='http://kb4images.com/images/high-quality-wallpapers/36613810-high-quality-wallpapers.jpg'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>
<Card className='small'
  header={<CardTitle image='http://kb4images.com/images/high-quality-wallpapers/36067922-high-quality-wallpapers.jpg'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>
</div>

</Col>
</div>
<Footer />
</div>
    );
  }
}


