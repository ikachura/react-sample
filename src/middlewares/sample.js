function createLoggerMiddleware(extraArgument) {
  return ({dispatch, getState}) => (next) => (action) => {
    console.log('---', action.type, action.payload)

    if (!!action.err) {
      // refetch
      console.log('refetch')
    }

    return next(action)
  }
}

export {createLoggerMiddleware}
