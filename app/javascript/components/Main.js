// =============
//  Dependencies
// =============

// packages
import React from 'react'

// components
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

  // Life Cycles
  componentDidMount() {
    this.fetchPosts()
  }

  // RENDER
  render () {
    return (
      <main>
        {this.state.posts.map((postData) => {
          <Post
            key={postData.id}
            postData={postData}
            handleView={this.props.handleView}
          />
        })}
      </main>
    )
  }

}

export default Main
