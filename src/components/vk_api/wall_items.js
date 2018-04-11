import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWallItems, createWallItem } from "../../actions/vk-actions";

class WallPosts extends Component {
  componentDidMount() {
    this.props.fetchWallItems();
  }
  postItem(){
    this.props.createWallItem();
  }

  renderPosts() {
    return _.map(this.props.items, item => {
      return(
          <li className="list-group-item" key={item.id}>
            {item.text}
          </li>
        )
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          {/*<Link className="btn btn-primary" to="/posts/new">*/}
            {/*Add a Post*/}
          {/*</Link>*/}
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <Link to="/" className="btn btn-danger">Cancel</Link>

        <button className="btn btn-danger"
        onClick={this.postItem}>
          post
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { fetchWallItems, createWallItem })(WallPosts);