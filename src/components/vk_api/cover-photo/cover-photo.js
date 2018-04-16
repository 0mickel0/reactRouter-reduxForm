import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../../../containers/cover-photo/cover-photo-canvas'

export default class PostCoverPhoto extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <Canvas />
      </div>
    );
  }
}