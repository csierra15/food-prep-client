import React, { Component } from 'react'
import MealForm from '../MealForm/MealForm'
import { connect } from 'react-redux'
import { addMeal } from '../../actions'
import './MealPage.css'

class MealPage extends Component {

  submit = values => {
    this.props.dispatch(addMeal(values))
  }
  render() {
    return(
      <div>
        <header role="banner">
          <h1 className="meal-page-h1">Add a Meal</h1>
        </header>
        <MealForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect()(MealPage)
