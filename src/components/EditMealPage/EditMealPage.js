import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditMealForm from '../EditMealForm/EditMealForm'
import { updateMeal } from '../../actions'

class MealModal extends Component {

  submit = (values) => {
    this.props.dispatch(updateMeal(values))
  }
  render() {
    return (
      <EditMealForm onSubmit={this.submit} />
    )
  }
}

export default connect()(MealModal)
