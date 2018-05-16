import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Sermons.css";
import { Media, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import Header from "../../components/Header";
import Footer from "../../components/Footer";


class Sermons extends Component {
  state = {
    videos: [],
    title: [],
    speaker: "",
    link:"",  
    image:""
  };

  componentDidMount() {
    this.loadSermons();
  }

  loadSermons = () => {
    API.getSermons()
      .then(res =>
        this.setState({ videos: res.data, title: "", speaker: "", link: "", image: "" })
      )
      .catch(err => console.log(err));
  };
  // load sermons saved in DB
  render() {
    return (
        
        <div className="sermon-header" fluid>
<div>
    <div className="sermon-title">
    <Header sermon="Past Sermons" />  
      </div>
    </div>
    <Row>
    <Col className="sermon-list" sm={{offset: 4}}>
    {this.state.videos.map(video => (
          <Card key={video._id}> 
          <CardImg top width="100%" src={video.image} alt="Card image cap" />
              <Link to={"/video/" + video._id}>
                <strong className="sermon-titles">
                  <ul>
                    {video.title} - by {"\n"}
                    
                    {video.speaker}
                  </ul>
                </strong>
              </Link>
          </Card>
          ))}
          </Col>
          </Row>
          <Footer />
      </div>
      
    );
  }
}

export default Sermons;

