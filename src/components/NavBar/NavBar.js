import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import { connect } from 'react-redux'

const NavBar = (props) => {
  return (
		<div className="nav-bar">
        {props.isLoggedIn ?
          <ul className="nav-list">
            <li><Link to="/dashboard" className="nav-list-item">Home</Link></li>
    				<li><Link to="/recipes" className="nav-list-item">Recipes</Link></li>
            <li><Link to="/pantry" className="nav-list-item">Pantry</Link></li>
            <li><Link to="/shopping-list" className="nav-list-item">Shopping List</Link></li>
            <li><Link to="/" className="nav-list-item"
              onClick={() => {
                localStorage.clear()
                props.isLoggedIn = false
              }}>
              Log Out</Link></li>
            </ul>
            : ''}
		</div>
  )
}

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(NavBar)
