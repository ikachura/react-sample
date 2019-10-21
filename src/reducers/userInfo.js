import {RequestStatus} from '../utils/RequestStatus'
import {
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
} from '../types/actionTypes'

const initialValue = {
  requestStatus: RequestStatus.Default,
  firstName: '',
  lastName: '',
}

export const userInfo = (state = initialValue, action) => {
  switch (action.type) {
    case GET_USER_BY_ID_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      }

    case GET_USER_BY_ID_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      }

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
        firstName: action.payload.firstName,
      }

    default:
      return state
  }
}
