export const isGreater = (state) => {
  const userLength = state.users.values.length
  const counter = state.counterReducer

  // no fetch

  return userLength > counter
}
