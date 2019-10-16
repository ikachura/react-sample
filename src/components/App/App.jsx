// @flow

import React from 'react'
import './App.css'
// import Component1 from '../Component1'
// import Component2 from '../Component2'
import Component4 from '../Component4'

type Props = {}

type State = {
  firstName?: string,
  lastName?: string,
  age?: string,
  creditCardType?: string,
}

class App extends React.Component<Props, State> {
  state = {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    creditCardType: undefined,
  }

  handleSubmit = (firstName: string, lastName: string, age: string) => {
    this.setState({
      firstName,
      lastName,
      age,
    })
  }

  handleCreditCardChange = (creditCardType: string) => {
    this.setState({
      creditCardType,
    })
  }

  render() {
    // const {firstName, lastName, age, creditCardType} = this.state

    console.log('(render) ___0')

    return (
      <div className="container">
        <header className="header" />
        {/*<Component1 onSubmit={this.handleSubmit} onCreditCardChange={this.handleCreditCardChange} />*/}
        {/*<Component2*/}
        {/*  firstName={firstName}*/}
        {/*  lastName={lastName}*/}
        {/*  age={age}*/}
        {/*  creditCardType={creditCardType}*/}
        {/*/>*/}

        <Component4 />
      </div>
    )
  }
}

export default App
