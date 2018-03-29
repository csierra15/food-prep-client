import React, { Component } from 'react'
import MealForm from '../MealForm/MealForm'
import { connect } from 'react-redux'
import { addMeal } from '../../actions'

class MealPage extends Component {

  submit = values => {
    console.log('dispatching add meal!', values)
    this.props.dispatch(addMeal(values))
  }
  render() {
    return(
      <div>
        <header role="banner">
          <h1>Add a Meal</h1>
        </header>
        <MealForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect()(MealPage)
