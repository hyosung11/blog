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
  handleCreate = (createdData) => {
    fetch('/api/posts', {
      body: JSON.stringify(createdData),
      method: 'Post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdPost => {
      return createdPost.json()
    })
    .then(newPost => {
      // Takes the user back to the index page
      this.props.handleView('home')
      // Updates state with new post
      this.setState(previousState => {
        previousState.posts.push(newPost)
        return { posts: previousState.posts }
      })
    })
    .catch(error => console.log(error))
  }

  // Update a post
  handleUpdate = (updatedData) => {
    fetch(`/api/posts/${updatedData.id}`, {
      body: JSON.stringify(updatedData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      }
    })
    .then(updatePost => {
      // Bring user back to home view after editing the post
      this.props.handleView('home')
      this.fetchPosts()
    })
    .catch(error => console.log(error))
  }

  // Delete a post
  handleDelete = (id) => {
    alert('Please confirm delete')
    fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      this.fetchPosts()
    })
    .catch(error => console.log(error))
  }
  // Life Cycles
  componentDidMount() {
    this.fetchPosts()
  }

  // RENDER
  render () {
    return (
      <main>
        <h1>{this.props.view.pageTitle}</h1>
        {this.props.view.page === 'home'
        ? this.state.posts.map((postData) => (
            <Post
              key={postData.id}
              postData={postData}
              handleView={this.props.handleView}
              handleDelete={this.handleDelete}/>
          ))
          : <Form
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
        }
      </main>
    )
  }
}

// Export
export default Main
