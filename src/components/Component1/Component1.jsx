import React from 'react'
import './Component1.css'

class Component1 extends React.Component {
  state = {}

  handleFieldChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = () => {
    const {firstName, lastName, age} = this.state

    this.props.onSubmit(firstName, lastName, age)
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Component 1:</h2>
        <label>FirstName</label>
        <input name="firstName" type="text" onChange={this.handleFieldChange} />
        <br />
        <label>LastName</label>
        <input name="lastName" type="text" onChange={this.handleFieldChange} />
        <br />
        <label>Age</label>
        <input name="age" type="text" onChange={this.handleFieldChange} />
        <br />
        <button onClick={this.handleSubmit}>Check</button>
      </form>
    )
  }
}

export default Component1
