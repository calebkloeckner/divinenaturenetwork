import React, { Component} from 'react';
import FacebookProvider, { Like } from 'react-facebook';
 
export default class Facebook extends Component {
  render() {
    return (
        <div className="col-md-2 col-md-offset-2">
        <FacebookProvider appId="1606990142851605">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider> 
        </div>
    );
  }
}

