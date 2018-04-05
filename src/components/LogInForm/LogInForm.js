import React from 'react'
import './LogInForm.css'
import { connect } from 'react-redux'
import { logInUser } from '../../actions/authActions'

const LogInForm = (props) => {
  return (
    <div className="login-div">
      <h1 className="login-h1">Log in to your Food Prep account.</h1>
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value

        props.dispatch(logInUser(username, password))
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
    </div>
  )
}

export default connect()(LogInForm)
