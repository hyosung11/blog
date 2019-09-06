// DEPENDENCIES

// packages
import React from 'react'

// components
import Header from './Header.js'
import Aside from './Aside.js'
import Main from '/.Main.js'

// COMPONENT CLASS
class App extends React.Component {
  // STATE
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'lorem ipsum ...'
      }
    }
  }

  // HANDLERS
  handleView = (view) => {
    // declare an empty variable
    let pageTitle = ''
    // decide the pageTitle based on the view
    switch (view) {
      case 'home':
        pageTitle = 'lorem ipsum'
        break
      case 'addPost':
        pageTitle = 'lorem ipsum'
        break
      case 'editPost':
        pageTitle = 'lorem ipsum'
        break
      default:
        break
    }
    // update the state
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }

  // RENDER
  render () {
    return (
      <div className="large-container">
        <Header/>
        <div className="main-container">
          <Aside handleView={this.handleView}/>
          <Main
            view={this.state.view}
            handleView={this.handleView}
          />
        </div>
      </div>
    )
  }
}

// Export
export default App
