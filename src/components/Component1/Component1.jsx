import React from 'react'
import PropTypes from 'prop-types'
import './Component1.css'
import Component3 from '../Component3'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCreditCardChange: PropTypes.func.isRequired,
}

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
    console.log('(render) Component1')

    return (
      <>
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
        <Component3 onCreditCardChange={this.props.onCreditCardChange} age={this.state.age} />
      </>
    )
  }
}

Component1.propTypes = propTypes

export default Component1
