import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import './RegisterForm.css'

const RegisterForm = () => {
  return (
    <section>
        <h2>Ready to make a plan?</h2>
        <h3>sign up for an account</h3>
        <form>
          <label htmlFor="first-name">
            First Name
          </label>
          <input type="text" name="first-name" />

          <label htmlFor="last-name">
            Last Name
          </label>
          <input type="text" name="last-name" />

          <label htmlFor="email">
            Email Address
          </label>
          <input type="email" name="email" />

          <label htmlFor="password">
            Password
          </label>
          <input type="password" name="password" />

          <label htmlFor="confirm-password">
            Confirm Password
          </label>
          <input type="password" name="confirm-password" />

          <button type="submit">Sign Up</button>
          <span>Already have an account? <a href="#log-in">Log in</a></span>
        </form>
    </section>
  )
}

export default RegisterForm
