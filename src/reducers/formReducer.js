const initialValue = {
  firstName: '',
  lastName: '',
  age: 18,
}

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ON_SUBMIT':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
