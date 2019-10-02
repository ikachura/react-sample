import React from 'react'
import './App.css'
import Component1 from '../Component1'
import Component2 from '../Component2'

class App extends React.Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
  }

  handleSubmit = (firstName, lastName, age) => {
    this.setState({
      firstName,
      lastName,
      age,
    })
  }

  render() {
    const {firstName, lastName, age} = this.state

    return (
      <div className="container">
        <header className="header" />
        <Component1 onSubmit={this.handleSubmit} />
        <Component2 firstName={firstName} lastName={lastName} age={age} />
      </div>
    )
  }
}

export default App
