import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

import { Media, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import Header from "../../components/Header";
import Iframe from 'react-iframe'


class Live extends Component{
    render(){
        return(
            <div>
            <Header about='Watch Live'/>
            <div className="col-md-2 col-md-offset-2">
            <iframe id="ls_embed_1515344500" src="https://livestream.com/accounts/6829414/events/8005203/player?width=640&amp;height=360&amp;enableInfoAndActivity=true&amp;defaultDrawer=&amp;autoPlay=true&amp;mute=false" height="480" width="900" allowfullscreen="" frameborder="0" scrolling="no"></iframe>
            </div>
            </div>

        )
    }
   
}

{/* <a style="padding: 2px 0px 4px; width: 400px; background: #ffffff; display: block; color: #000000; font-weight: normal; font-size: 10px; text-decoration: underline; text-align: center;" href="https://livestream.com/accounts/6829414/events/8005203/player?" target="_blank">Live streaming video by Livestream</a> */}

export default Live;