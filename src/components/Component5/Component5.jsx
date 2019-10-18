import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../../actions/fetchUsers'
import {isGreater} from '../../selectors/isGreater'
import {getFormattedUsers} from '../../selectors/getFormattedUsers'

const Component5 = ({isLoading, users, formattedUsers, isGreater, fetchUsers}) => {
  return (
    <div>
      <div>{isGreater ? <div>Greater</div> : <div>Less</div>}</div>

      <button onClick={fetchUsers} disabled={isLoading}>
        Fetch users!
      </button>

      {isLoading ? (
        <div>Spinner</div>
      ) : (
        <ul>
          {users.map((it) => (
            <li key={it.email}>{it.name.first}</li>
          ))}
        </ul>
      )}

      <div>---</div>

      <ul>
        {formattedUsers.map((it) => (
          <li key={it.email}>
            {it.initials} + {it.first}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Component5Container = connect(
  (state) => ({
    isLoading: state.users.isLoading,
    users: state.users.values,
    formattedUsers: getFormattedUsers(state),
    isGreater: isGreater(state),
  }),
  {fetchUsers},
)(Component5)

export {Component5Container as Component5}
