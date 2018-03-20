import React, {Component} from 'react'
import './Dashboard.css'
import Calendar from '../Calendar/Calendar'
import { connect } from 'react-redux'

export class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <header role="banner">
          <h1>Hello!</h1>
          <h2>Here's this week's plan</h2>
        </header>
        <Calendar />
      </div>
    )
  }
}

export default connect()(Dashboard)
