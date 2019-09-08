// DEPENDENCIES

// packages
import React from 'react'

// components
import Header from './Header.js'
import Aside from './Aside.js'
import Main from './Main.js'

// COMPONENT CLASS
class App extends React.Component {
  // STATE
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: ''
      },
      formInputs: {
        name: null,
        image: null,
        body: null,
        id: null
      }
    }
  }

  // HANDLERS
  handleView = (view, postData) => {
    // declare an empty variable
    let pageTitle = ''
    let formInputs = {
      name: '',
      image: '',
      body: '',
      id: null
    }
    // decide the pageTitle based on the view
    switch (view) {
      case 'home':
        pageTitle = ''
        break
      case 'addPost':
        pageTitle = ''
        break
      case 'editPost':
        pageTitle = ''
        formInputs = {
          name: postData.name,
          image: postData.image,
          body: postData.body,
          id: postData.id
        }
        break
      default:
        break
    }
    // update the state
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
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
            formInputs={this.state.formInputs}
          />
        </div>
      </div>
    )
  }
}

// Export
export default App
