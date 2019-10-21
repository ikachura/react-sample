const callApi = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fn = Math.random() < 0.75 ? resolve : reject
      fn(data)
    }, 1200)
  })
}

const callGetUserById = (id) => {
  return callApi({firstName: 'John', lastName: 'Doe', age: 18})
}

global.callApi = () => {
  callApi('321').then((data) => console.log(data))
}

// UserService

class UserService {
  // (id: string): User
  getUserById(id) {
    // no catch
    return callGetUserById(id)
  }
}

export {UserService}
