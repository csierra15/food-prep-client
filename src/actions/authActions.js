import {API_BASE_URL} from '../config'

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  user
})

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const logInUserSuccess = (token) => ({
  type: LOGIN_USER_SUCCESS,
  token
})

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
    .then(json => dispatch(registerUserSuccess(json)))
    .catch(err => console.log(err))
  }
}

export const logInUser = (username, password) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/auth/login`, {
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
    .then(json => {
      const { authToken, userId } = json
      localStorage.setItem('token', authToken)
      localStorage.setItem('id', userId)
      dispatch(logInUserSuccess(authToken))
      window.location = '/dashboard'
    })
    .catch(err => console.log(err))
  }
}

// export const getUserData = () => {
//   return (dispatch) => {
//     const authToken = localStorage.getItem('token')
//     fetch(`${API_BASE_URL}/protected`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'applicaton/json'
//         Authorization: `Bearer ${authToken}`
//       },
//       body: JSON.stringify({
//         username,
//         password
//       })
//     })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
//   }
// }
