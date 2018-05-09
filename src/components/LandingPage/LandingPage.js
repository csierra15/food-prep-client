import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import '../../stylesheets/float-grid.css'

const LandingPage = () => {
  return (
    <main role="main">
      <div className="home-containter">
        <div className="background-img">
          <img src="https://i.imgur.com/o6qVmRb.jpg" title="source: imgur.com" alt="cutting board with herbs and knife"/>
        </div>
        <header role="banner">
          <h1 className="homepage-h1">Food Prep</h1>
        </header>
        <Link id="login-btn" to="/login">
          <button>
            Log In / Demo
          </button>
        </Link>
        <Link id="register-btn" to="/register">
          <button>
            Register
          </button>
        </Link>
        <div id="icons-section">
          <div className="icon-info col-4">
            <h3>Plan your meals</h3>
            <i className="fas fa-calendar-alt fa-7x"></i>
          </div>
          <div className="icon-info col-4">
            <h3>Make notes.</h3>
            <i className="fas fa-list-alt fa-7x"></i>
          </div>
          <div className="icon-info col-4">
            <h3>Prep!</h3>
            <i className="fas fa-lemon fa-7x"></i>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
