import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
import Header from "../../components/Header";

import { Col, Slider, Slide } from 'react-materialize';
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
          placement="center">
          <h1>The Divine Nature Network</h1>
        </Slide>
        <Slide 
          src="https://pixnio.com/free-images/2017/12/16/2017-12-16-09-37-01-1200x647.jpg"
          placement="right">
          <h1>Where East Meets West And Christ Is In The Center</h1>
        </Slide>
        <Slide 
          src="https://pixnio.com/free-images/2017/12/15/2017-12-15-15-28-15-1200x800.jpg"
          placement="center">
          <h1>DNN</h1>
        </Slide>
      </Slider>
    </Row>

<div className="container">
<Col s={3} className="center">
<Nav />
      <h2>Man is not just a human having a spiritual experience; he is a Spirit having a human experience.</h2> 
</Col>
</div>
<Row>

<div className="card card-thingy col d-flex justify-content-center" style={{width: "18rem;"}}>
  <img className="card-img-top" src="http://kb4images.com/images/high-quality-wallpapers/37902558-high-quality-wallpapers.jpg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Donate</h5>
    <p className="card-text">There is a Divine Connection between our resources and our relationships. Your heart will follow your treasure!</p>
    <a href="https://www.paypal.com/donate/?token=Ml9LxfQnhERVqOrHt4-YRIBauT3x79vx4-EeMjBHBnRWi7-IaHnW703KWYb47tYxSoyyFG&country.x=US&locale.x=US" className="btn btn-primary">Donate</a>
  </div>
</div>
<div className="card card-thingy col d-flex justify-content-center" style={{width: "18rem;"}}>
  <img className="card-img-top" src="https://c.pxhere.com/photos/26/8b/HD_wallpaper_lake_landscape_nature_nature_wallpaper_reflection_rocks_rocky-911608.jpg!d" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">The Lectionary Page</h5>
      <p className="card-text">A Liturgical Calendar for Upcoming Weeks</p>
      <a href="http://www.lectionarypage.net" className="btn btn-primary">The Lectionary Page</a>
    </div>
</div>
<div className="card card-thingy col d-flex justify-content-center" style={{width: "18rem;"}}>
  <img className="card-img-top" src="http://kb4images.com/images/high-quality-wallpapers/36613810-high-quality-wallpapers.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Past Sermons</h5>
      <p className="card-text"></p>
      <a href="../Sermons" className="btn btn-primary">Go to past sermons</a>
    </div>
</div>
</Row>
</div>

    );
  }
}