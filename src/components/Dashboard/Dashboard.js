import React, {Component} from 'react'
import './Dashboard.css'
import MealList from '../MealList/MealList'
import MealCard from '../MealCard/MealCard'
import { connect } from 'react-redux'
import {addMeal} from '../../actions'

export class Dashboard extends Component {

  // addMeal(content) {
  //   this.props.dispatch(addMeal(content));
  // }




  render() {
    return (
      <div className="dashboard">

        <header role="banner">
          <h1>Hello!</h1>
          <h2>Here's this week's plan</h2>
        </header>

        <div className="meals">
          <MealCard />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default connect()(Dashboard)
