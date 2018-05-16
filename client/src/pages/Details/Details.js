import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Header from "../../components/Header";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import YouTube from 'react-youtube';
import './Details.css';
import Footer from "../../components/Footer";

class Detail extends Component {
    state = {
      videos: [],
      title: [],
      speaker: "",
      link:""
    };
  // Single video once clicked on

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
    const opts = {
        height: '480',
        width: '800',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
    return (
      <Container fluid>
       <Header details={this.state.title}/>
        <Row>
        
          <div size="md-6">
            <div className="row title">
            <div className="col-md-6 col-md-offset-4">
           
              <h1>
              By: {this.state.speaker}
              <YouTube
              
      videoId={this.state.videos}
      opts={opts}
      onReady={this._onReady}
    />
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
    <Footer />
  }
}

export default Detail;


