import {API_BASE_URL} from '../config'

// const registerUserSuccess = (user) => ({
//   type: 'REGISTER_USER_SUCCESS',
//   user
// })

export const registerUser = (username, password) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
}
