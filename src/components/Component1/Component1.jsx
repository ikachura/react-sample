// @flow

import React from 'react'
import './Component1.css'
import {useComponent1} from './useComponent1'
import {connect} from 'react-redux'
import {fetchUsers} from '../../actions/fetchUsers'
import {getFormattedUsers} from '../../selectors/getFormattedUsers'

type Props = {
  formattedUsers: any[],
  fetchUsers: () => void,
}

const Component1 = ({formattedUsers, fetchUsers}: Props) => {
  console.log('(render) _______1')
  const {user, handleFieldChange} = useComponent1(fetchUsers)

  return (
    <>
      <div>Info</div>
      <div>FirstName: {user.firstName}</div>
      <div>LastName: {user.lastName}</div>
      <div>Age: {user.age}</div>

      <br />
      <div>Initials</div>
      <div>
        {formattedUsers.map((it, index) => (
          <div key={index}>{it.initials}</div>
        ))}
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Component 1:</h2>
        <label>FirstName</label>
        <input name="firstName" type="text" onChange={handleFieldChange} />
        <br />
        <label>LastName</label>
        <input name="lastName" type="text" onChange={handleFieldChange} />
        <br />
        <label>Age</label>
        <input name="age" type="text" onChange={handleFieldChange} />
        <br />
        <button onClick={() => {}}>Check</button>
      </form>
      {/*<Component3 onCreditCardChange={onCreditCardChange} age={this.state.age} />*/}
    </>
  )
}

const Component1Container = connect(
  (state) => ({
    formattedUsers: getFormattedUsers(state),
  }),
  {fetchUsers},
)(Component1)

export default Component1Container
