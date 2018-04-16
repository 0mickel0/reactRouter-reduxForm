import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUploadCoverUrl, postToUploadUrl } from "../../actions/vk-actions";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    //this.props.fetchUploadCoverUrl();

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const date = new Date()
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillStyle = 'white';
      ctx.fillText(date, 210, 75)
    }
  }
  handleChange(e) {
    postToUploadUrl(e);
    console.log(e);
  }
  render() {
    const cheese = "./cover.jpg";
    return(
      <div className="cover-wrapper">
        <canvas className="cover-canvas" ref="canvas" width={1590} height={400} />
        <img className="cover-img" ref="image" src={cheese}/>
        <input type="file" accept="image/*" onChange={ (e) => this.handleChange(e.target.files) } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { upload_url: state.upload_url };
}


export default connect(mapStateToProps, {fetchUploadCoverUrl})(Canvas);