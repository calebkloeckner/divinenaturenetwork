import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Sermons.css";
import { Media, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Header from "../../components/Header";

class Sermons extends Component {
  state = {
    videos: [],
    title: [],
    speaker: "",
    link:""
  };

  componentDidMount() {
    this.loadSermons();
  }

  loadSermons = () => {
    API.getSermons()
      .then(res =>
        this.setState({ videos: res.data, title: "", speaker: "", link: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
        
        <div className="sermon-header" fluid>
<div>
    <div className="sermon-title">
    <Header sermon="Past Sermons" />
      <h1>
      </h1>
      </div>
    </div>
    <Row>
    <Col sm="6">
          <Card> 
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            {this.state.videos.length ? (
              <Card body className="sermon-card">
                   <CardTitle>Sermon</CardTitle>
                {this.state.videos.map(video => (
                  <Card key={video._id}>
                    <Link to={"/video/" + video._id}>
                      <strong className="sermon-titles">
                        <Card body>
                        <ul>
                          {video.title}{"\n"}
                          {video.speaker}
                        </ul>
                        </Card>  
                         
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteVideo(video._id)} /> */}
                  </Card>
                ))}
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
          </Col>
          </Row>
      </div>
      
    );
  }
}

export default Sermons;

