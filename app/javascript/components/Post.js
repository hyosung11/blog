 // DEPENDENCIES

 // packages
 import React from 'react'

 // COMPONENT CLASS
class Post extends React.Component {
  // render
  render () {
    return (
      <article>
        <div className="post-header">
          <img src={this.props.postData.image} alt="image" />
          <h1>{this.props.postData.name}</h1>
        </div>
        <div className="post-body">
          {this.props.postData.body}
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit post</li>
            <li onClick={() => {this.props.handleDelete(this.props.postData.id)}}>delete post</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Post
