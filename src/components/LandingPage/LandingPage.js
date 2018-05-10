import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
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
          <div className="icon-info col-6">
            <h3>Plan Your Meals</h3>
            <i className="fas fa-calendar-alt fa-7x"></i>
            <p>Gain certainty by planning your meals for the day, week, or month.</p>
          </div>
          <div className="icon-info col-6">
            <h3>Prep</h3>
            <i className="fas fa-lemon fa-7x"></i>
            <p>Spend time prepping your weekly meals!</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default LandingPage
