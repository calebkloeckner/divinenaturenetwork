import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Detail extends Component {
    state = {
      videos: [],
      title: [],
      speaker: "",
      link:""
    };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

componentDidMount (){
    API.getSermons(this.props.match.params.id)
      .then(res => {
          
          for(var i = 0; i < res.data.length; i++){
              if(this.props.match.params.id === res.data[i]._id){
                this.setState({title: res.data[i].title, videos: res.data[i].link, speaker: res.data[i].speaker})
              }
          }
          console.log(res);
        console.log(this.props.match.params.id);
        
       
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <div size="md-12">
            <div className="row">
            <div class="col-md-4 col-md-offset-4">
              <h1>
                  {this.state.title}:{'\n'}
                {this.state.videos}{'\n'} By: {this.state.speaker}
              </h1>
              </div>
            </div>
          </div>
        </Row>
        
        <Row>
          <div className="md-2 col-md-offset-2">
          <button>
            <Link to="/sermons">← Back to Sermons</Link>
            </button>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Detail;
