// @flow

import React from 'react'
import './Component1.css'
// import Component3 from '../Component3'

type Props = {|
  onSubmit: (v1: string, v2: string, v3: string) => void,
  onCreditCardChange: (e: SyntheticEvent<HTMLInputElement>) => void,
|}

const Component1 = ({onCreditCardChange, onSubmit}: Props) => {
  console.log('(render) _______1')

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Component 1:</h2>
        <label>FirstName</label>
        <input name="firstName" type="text" onChange={onCreditCardChange} />
        <br />
        <label>LastName</label>
        <input name="lastName" type="text" onChange={onCreditCardChange} />
        <br />
        <label>Age</label>
        <input name="age" type="text" onChange={onCreditCardChange} />
        <br />
        <button onClick={onSubmit}>Check</button>
      </form>
      {/*<Component3 onCreditCardChange={onCreditCardChange} age={this.state.age} />*/}
    </>
  )
}

export default Component1
