import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  state = { title: "", body: "" };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // Call Actions here
    this.props.createPost(post);
  };
  render() {
    return (
      <div>
        <h1>Add New Post</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <br />
          <label htmlFor="body">Body</label>
          <br />
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
        <hr />
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(null, { createPost })(PostForm);
