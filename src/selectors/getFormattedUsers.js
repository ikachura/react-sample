export const getFormattedUsers = (state) => {
  return state.users.values.map((it) => ({
    initials: it.name.first[0] + it.name.last[0],
    first: it.name.first,
    email: it.email,
  }))
}
