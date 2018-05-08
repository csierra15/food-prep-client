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
        <Calendar />
        <div className="add-meal-btn">
          <Link to="/add-meal"><button id="add-meal-btn">Add Item</button></Link>
        </div>

      </div>
    )
  }
}

export default connect()(Dashboard)
