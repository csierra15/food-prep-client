import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import {connect} from 'react-redux'
import { registerUser } from '../../actions/authActions'

const RegisterForm = (props) => {
  return (
    <div className="register-div">
      <h1 className="register-h1">Register for a Food Prep account.</h1>
      <form className="register-form" onSubmit={ (e) => {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value

        props.dispatch(registerUser(username, password))
      }}>
        <label htmlFor="username">
          Username
        </label>
        <input type="text" name="username" />
        <label htmlFor="password">
          Password
        </label>
        <input type="password" name="password" />
        <label htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input type="password" name="confirmPassword" />
        <button type="submit">Sign Up</button>
        <p id="register-or">or</p>
        <Link to="/login"><button type="submit">Log In</button></Link>
      </form>
    </div>
  )
}

export default connect()(RegisterForm)
