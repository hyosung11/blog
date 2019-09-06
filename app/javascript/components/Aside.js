// DEPENDENCIES
// packages
import React from 'react'

// component class
class Aside extends React.Component {
  // Render
  render () {
    return (
      <aside>
        <h1>NAVIGATE</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>home</li>
          <li onClick={() => {this.props.handleView('addPost')}}>add post</li>
        </ul>
      </aside>
    )
  }
}

// Export
export default Aside 
