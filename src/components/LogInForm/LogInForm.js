import React, { Componenet } from 'react'
import './LogInForm.css'
import { connect } from 'react-redux'

//should this be stateful?
const LogInForm = () => {
  return (
    <form onSubmit={ (e) => {
      e.preventDefault();
      // const username = e.target.username.value
      // const password = e.target.password.value
      //
      // props.dispatch(logInUser(username, password))
    }}>
      <label htmlFor="username">
        Username
      </label>
      <input type="text" name="username" />

      <label htmlFor="password">
        Password
      </label>
      <input type="password" name="password" />

      <button type="submit">Sign In</button>
    </form>
  )
}

export default LogInForm
