import React, {Component} from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Calendar from '../Calendar/Calendar'
import { connect } from 'react-redux'
import { fetchMealData } from '../../actions'
import MealModal from '../MealModal/MealModal'

export class Dashboard extends Component {

  componentDidMount(props) {
    this.props.dispatch(fetchMealData())
  }

  render() {
    return (
      <div className="dashboard">
        <header role="banner">
          <h1 className="dashboard-h1">Hello!</h1>
          <h2>Here's your plan</h2>
        </header>
        <Calendar />
        <MealModal />
        <Link to="/add-meal" className="new-meal-link"><button className="new-meal-btn">Add Meal</button></Link>
      </div>
    )
  }
}

export default connect()(Dashboard)
