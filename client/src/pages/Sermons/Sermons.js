import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Sermons.css";

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

//   deleteSermons = id => {
//     API.deleteSermons(id)
//       .then(res => this.loadSermons())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.speaker) {
//       console.log("========", this.state);
//       API.saveSermon({
//         title: this.state.title,
//         speaker: this.state.speaker,
//         link: this.state.link
//       })
//         .then(res => this.loadSermons())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    return (
      <div className="container sermon-header" fluid>
          <Col>
            <Jumbotron>
              <h1>Previous Sermons</h1>
            </Jumbotron>
            {this.state.videos.length ? (
              <List>
                {this.state.videos.map(video => (
                  <ListItem key={video._id}>
                    <Link to={"/video/" + video._id}>
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
          </Col>
      </div>
    );
  }
}

export default Sermons;
