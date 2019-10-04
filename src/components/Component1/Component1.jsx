// @flow

import React from 'react'
import './Component1.css'
import Component3 from '../Component3'

type Props = {|
  onSubmit: (v1: string, v2: string, v3: string) => void,
  onCreditCardChange: (v1: string) => void,
|}

type State = {|
  firstName: string,
  lastName: string,
  age: string,
|}

class Component1 extends React.Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    age: '',
  }

  handleFieldChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget

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

export default Component1
