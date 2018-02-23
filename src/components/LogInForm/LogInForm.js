import React from 'react'
import './LogInForm.css'

const LogInForm = () => {
  return (
    <form>
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
