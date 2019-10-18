import {usersService} from '../services/UsersService'

export const fetchUsers = () => (dispatch, getState) => {
  if (getState().users.isLoading) {
    return
  }

  dispatch({type: 'FETCH_USERS_REQUEST'})

  usersService
    .fetchUsers(10)
    .then((data) => {
      dispatch({
        type: 'FETCH_USERS_SUCCESS',
        payload: data.results,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_USERS_FAILURE',
        err,
      })
    })
}

// payload, err(or), meta
