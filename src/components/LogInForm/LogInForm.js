import React from 'react'
import './LogInForm.css'

const LogInForm = () => {
  return (
    <form className="loginForm" onSubmit={(e) => {
      e.preventDefault()
      console.log('form submitted!')
    }}>
      <label htmlFor="email">
        Email Address
      </label>
      <input type="email" name="email" />

      <label htmlFor="password">
        Password
      </label>
      <input type="password" name="password" />

      <button type="submit">Sign In</button>
    </form>
  )
}

export default LogInForm
