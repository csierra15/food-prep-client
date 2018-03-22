import React, {Component} from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Calendar from '../Calendar/Calendar'
import { connect } from 'react-redux'

export class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <header role="banner">
          <h1>Hello!</h1>
          <h2>Here's your plan</h2>
        </header>
        <Calendar />
        <Link to="/add-meal" className="new-meal-link"><button className="new-meal-btn">Add Meal</button></Link>
      </div>
    )
  }
}

export default connect()(Dashboard)
