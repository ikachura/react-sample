import React from 'react'
import './App.css'
import Component1 from '../Component1'
import Component2 from '../Component2'

class App extends React.Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    creditCardType: undefined,
  }

  handleSubmit = (firstName, lastName, age) => {
    this.setState({
      firstName,
      lastName,
      age,
    })
  }

  handleCreditCardChange = (creditCardType) => {
    this.setState({
      creditCardType,
    })
  }

  render() {
    const {firstName, lastName, age, creditCardType} = this.state

    console.log('(render) App')

    return (
      <div className="container">
        <header className="header" />
        <Component1 onSubmit={this.handleSubmit} onCreditCardChange={this.handleCreditCardChange} />
        <Component2
          firstName={firstName}
          lastName={lastName}
          age={age}
          creditCardType={creditCardType}
        />
      </div>
    )
  }
}

export default App
