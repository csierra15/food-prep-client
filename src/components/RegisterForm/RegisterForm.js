import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import {connect} from 'react-redux'
import { registerUser } from '../../actions/authActions'

const RegisterForm = (props) => {
  return (
    <section>
        <h2>Ready to make a plan?</h2>
        <h3>sign up for an account</h3>
        <form onSubmit={ (e) => {
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
          <span>Already have an account? <Link to="/log-in">Log in</Link></span>
        </form>
    </section>
  )
}

export default connect()(RegisterForm)
