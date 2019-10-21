import {UserService} from '../services/UserService'
import {
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
} from '../types/actionTypes'

// export const GET_USER_BY_ID_REQUEST = 'GET_USER_BY_ID_REQUEST'
// export const GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE'
// export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS'

export const getUserById = () => (dispatch, getState) => {
  dispatch({type: GET_USER_BY_ID_REQUEST})

  new UserService()
    .getUserById('1')
    .then((data) => {
      // data filter/map
      dispatch({type: GET_USER_BY_ID_SUCCESS, payload: data})
    })
    .catch((err) => {
      dispatch({type: GET_USER_BY_ID_FAILURE, err})
    })
}
