import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Header from "../../components/Header";

class Sermons extends Component {
  state = {
    videos: [],
    title: [],
    speaker: "",
    link:"",
    image:[]
  };

  componentDidMount() {
    this.loadSermons();
  }

  loadSermons = () => {
    API.getSermons()
      .then(res =>
        this.setState({ videos: res.data, title: "", speaker: "", link: "", image:"" })
      )
      .catch(err => console.log(err));
  };

  deleteSermons = id => {
    API.deleteSermons(id)
      .then(res => this.loadSermons())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.speaker) {
      console.log("========", this.state);
      API.saveSermon({
        title: this.state.title,
        speaker: this.state.speaker,
        link: this.state.link,
        image: this.state.image
      })
        .then(res => this.loadSermons())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
     
      <Container fluid>
         <Header video='Video' />
          <Col>
            <Jumbotron>
              <h1>Upload A Sermon</h1>
            </Jumbotron>
            <form method="post">
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image"
              />
              <Input
                value={this.state.speaker}
                onChange={this.handleInputChange}
                name="speaker"
                placeholder="Speaker"
              />
              <Input
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="link"
                placeholder="Link"
              />
              <FormBtn
                type="submit"
                onClick={this.handleFormSubmit}
              >
                Submit Video
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Previous Sermons</h1>
            </Jumbotron>
            {this.state.videos.length ? (
              <List>
                {this.state.videos.map(video => (
                  <ListItem key={video._id}>
                    <Link to={"/videos/" + video._id}>
                      <strong>
                        <ul>
                          <li>{video.title}</li>
                          <li>{video.speaker}</li>
                        </ul>
                        
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteVideo(video._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
       
      </Container>
    );
  }
}

export default Sermons;
