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

  // handles submit
  handleSubmit = (event) => {
    // prevent default form submit action
    event.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addPost') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editPost') {
      // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }

  // LIFE CYCLES
  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      image: this.props.formInputs.image,
      body: this.props.formInputs.body,
      id: this.props.formInputs.id
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.formInputs.name !== prevProps.formInputs.name) {
      this.setState({
        name: this.props.formInputs.name,
        image: this.props.formInputs.image,
        body: this.props.formInputs.body,
        id: this.props.formInputs.id
      })
    }
  }

  // RENDER
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type="text" placeholder="your name" id="name"
            value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          image:
          <input type="text" placeholder="your image" id="image"
            value={this.state.image} onChange={this.handleChange}/>
        </label>
        <label>
          <textarea placeholder="share your inspiration" id="body"
            value={this.state.body} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="inspire"/>
      </form>
    )
  }
}

// export
export default Form
