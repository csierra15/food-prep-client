import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer role="contentinfo">
      <span>Made by Carly Sierra</span>
      <span><Link to="https://github.com/csierra15/food-prep-client"> <i className="fab fa-github xs"></i></Link></span>
    </footer>
  )
}

export default Footer
