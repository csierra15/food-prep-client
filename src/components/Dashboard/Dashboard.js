import React, {Component} from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Calendar from '../Calendar/Calendar'
import { connect } from 'react-redux'
import { fetchMealData } from '../../actions'

export class Dashboard extends Component {

  componentDidMount(props) {
    this.props.dispatch(fetchMealData())
  }

  render() {
    return (
      <div className="dashboard">
        <header role="banner">
          <h1 className="dashboard-h1">Hello!</h1>
          <h3>Plan your meals here</h3>
          <Link to="/add-meal"><button id="add-meal-btn">Add Item</button></Link>
        </header>
        <Calendar />
      </div>
    )
  }
}

export default connect()(Dashboard)
