import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  onDeleteClick(id){
    this.props.deletePost(id,()=>{
      console.log('done')
    })
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      if(post.title){

        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
            <div
              className="delete-icon"
              value={post.id}
              onClick={()=>this.onDeleteClick(post.id)}
            >x</div>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
          <Link className="btn btn-primary" to="/wall">
            VK API
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex);