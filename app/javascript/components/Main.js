// =============
//  Dependencies
// =============
import React from 'react'
import Post from './Post.js'
import Form from './Form.js'
// =============
//  Components
// =============
class Main extends React.Component {
  // =============
  //  State
  // =============
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  // =============
  //  Handlers
  // =============
  fetchPosts = () => {
    fetch('/api/posts')
    .then(data => data.json())
    .then(blogData => {
      this.setState({ posts: blogData})
    })
  }
  // Create a new Post
  
}
