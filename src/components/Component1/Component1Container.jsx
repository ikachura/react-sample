// @flow

import React from 'react'
import Component1 from './Component1'

type Props = {|
  onSubmit: (v1: string, v2: string, v3: string) => void,
  onCreditCardChange: (v1: string) => void,
|}

type State = {|
  firstName: string,
  lastName: string,
  age: string,
|}

class Component1Container extends React.Component<Props, State> {
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
    console.log('1111')

    return <Component1 onSubmit={this.handleSubmit} onCreditCardChange={this.handleFieldChange} />
  }
}

export default Component1Container
