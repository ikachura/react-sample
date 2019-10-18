class UsersService {
  fetchUsers = (amount) => {
    return fetch(`https://randomuser.me/api/?results=${amount}&inc=name,picture,dob,email`).then(
      (data) => data.json(),
    )
  }

  createUser = () => {}

  deleteUser = () => {}
}

const usersService = new UsersService()

export {usersService}
