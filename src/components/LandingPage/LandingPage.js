import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <main role="main">
      <div className="home-containter">
        <div className="background-img">
          <img src="https://i.imgur.com/o6qVmRb.jpg" title="source: imgur.com" alt="cutting board with herbs and knife"/>
        </div>
        <header role="banner">
          <h1 className="homepage-h1">Food Prep</h1>
          <h2>Take Control</h2>
        </header>
        <section>
          <h3>Plan your meals</h3>
          <i className="fas fa-calendar-alt fa-7x"></i>
          <p>Build meal plans.</p>
        </section>
        <section>
          <h3>Make notes.</h3>
          <i className="fas fa-list-alt fa-7x"></i>
          <p>Keep track of your favorite recipes, todos, lists, and more!</p>
        </section>
        <section>
          <h3>Prep!</h3>
          <i className="fas fa-lemon fa-7x"></i>
          <p></p>
        </section>
        <Link to="/register">
          <button>
            Register
          </button>
        </Link>
        <Link to="/login">
          <button>
            Log In
          </button>
        </Link>
      </div>
    </main>
  )
}

export default LandingPage
