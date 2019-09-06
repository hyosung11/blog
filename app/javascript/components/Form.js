// DEPENDENCIES

// packages
import React from 'react'

// COMPONENTS CLASS
class Form extends React.Component {
  // STATE
  constructor() {
    super()
    this.state = {
      name: '',
      image: '',
      body: '',
      id: null
    }
  }
  // HANDLERS
  // handles form change
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  // handle submit
  handleSubmit = (event) => {
    // prevent default form submit action
    event.preventDefault()
    // 

  }
}


// export
export default Form
