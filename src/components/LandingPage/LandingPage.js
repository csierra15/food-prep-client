import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <main role="main">

      <Link to="/register" className="nav-list-item">
        <button>
          Register
        </button>
      </Link>
      <Link to="/login" className="nav-list-item">
        <button>
          Log In
        </button>
      </Link>
      <header role="banner">
        <h1>Food Prep</h1>
        <h2>Take Control</h2>
      </header>

      <section>
        <h3>Plan your meals for the week</h3>
        <p>[placeholder for icons]</p>
        <p>Food Prep helps you gain consistency and certainty in what you will have to eat by giving you a solid platform to build weekly meal plans.</p>
      </section>

      <section>
        <h3>Collect recipes you'd like to try</h3>
        <p>[placeholder for icons]</p>
        <p>Save your favorite recipes in one place.</p>
      </section>

      <section>
        <h3>Itemize your pantry</h3>
        <p>[placeholder for icons]</p>
        <p>Write down the ingredients you already have to make shopping list and meal plan building easier.</p>
      </section>
    </main>

  )
}

export default LandingPage
