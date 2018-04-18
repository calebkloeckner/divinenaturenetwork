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
      </div>
    </div>
    <Row>
    <Col className="sermon-list" sm={{offset: 4}}>
    {this.state.videos.map(video => (
          <Card> 
          <CardImg top width="100%" src={video.image} alt="Card image cap" />
            {video.length ? (
              <Card body className="sermon-card">
                   <CardTitle>Sermon</CardTitle>
                
                  <Card key={video._id}>
                    <Link to={"/video/" + video._id}>
                      <strong className="sermon-titles">
                        <Card body>
                        <ul>
                          {video.title}
                          {"\n"}
                          {video.speaker}
                        </ul>
                        </Card>  
                         
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteVideo(video._id)} /> */}
                  </Card>
                
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
          ))}
          </Col>
          </Row>
      </div>
      
    );
  }
}

export default Sermons;

