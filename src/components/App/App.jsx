// @flow

import React from 'react'
import './App.css'
// import Component1 from '../Component1'
// import Component2 from '../Component2'
// import Component4 from '../Component4'
import {Component5} from '../Component5'
import {UserInfo} from '../UserInfo'
import {connect} from 'react-redux'
import {getUserById} from '../../actions/getUserById'

type Props = {
  getUserById: (id: string) => void,
}

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

  componentDidMount(): void {
    this.props.getUserById('1')
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
        <UserInfo />
        {/*<Component1 onSubmit={this.handleSubmit} onCreditCardChange={this.handleCreditCardChange} />*/}
        {/*<Component2*/}
        {/*  firstName={firstName}*/}
        {/*  lastName={lastName}*/}
        {/*  age={age}*/}
        {/*  creditCardType={creditCardType}*/}
        {/*/>*/}

        {/*<Component4 />*/}

        <Component5 />
      </div>
    )
  }
}

const AppContainer = connect(
  undefined,
  {getUserById},
)(App)

export default AppContainer
