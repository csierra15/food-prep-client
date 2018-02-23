import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
		<div className="nav-bar">
			<ul className="nav-list">
				<li><Link to="/dashboard" className="nav-list-item">Home</Link></li>
				<li><Link to="/recipes" className="nav-list-item">Recipes</Link></li>
        <li><Link to="/pantry" className="nav-list-item">Pantry</Link></li>
        <li><Link to="/meal-plan" className="nav-list-item">Meal Plan</Link></li>
        <li><Link to="/shopping-list" className="nav-list-item">Shopping List</Link></li>
        <li><Link to="/register" className="nav-list-item">Register</Link></li>
			</ul>
		</div>
  )
}

export default NavBar
