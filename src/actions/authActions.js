import {API_BASE_URL} from '../config'
import {fetchMealData} from './index'

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
    .then(json => {
      dispatch(registerUserSuccess(json))
      alert('User registered! Log in to continue.')
      window.location = '/login'
    })
    .catch(err => {
      console.log(err)
      alert('Oops! Couldn\'t register new user')
    })
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
      localStorage.setItem('userId', userId)
      dispatch(logInUserSuccess(authToken))
      dispatch(fetchMealData(authToken))
      window.location = '/dashboard'
    })
    .catch(err => {
      console.log(err)
      alert('Oops! Couldn\'t log in')
      window.location = '/'
    })
  }
}
