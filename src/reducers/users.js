const initialValue = {
  isLoading: false,
  isLoaded: false,
  values: [],
}

export const users = (state = initialValue, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        isLoading: true,
      }

    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        err: action.err,
      }

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        values: action.payload,
      }

    default:
      return state
  }
}
