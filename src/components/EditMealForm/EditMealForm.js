import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'
import TimePickerComponent from '../TimePicker/TimePicker'
import moment from 'moment'
import { deleteMeal } from '../../actions'
import './EditMealForm.css'

export class EditMealForm extends Component {

  componentDidMount(props) {
    this.props.dispatch(change('editMeal', 'dateInput', moment(this.props.date).format('YYYY-MM-DD')))
    this.props.dispatch(change('editMeal', 'timeInput', this.props.time))
    this.props.dispatch(change('editMeal', 'mealDescription', this.props.title))
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <div id="new-plan-form-container">
        <form id="new-plan-form" onSubmit={handleSubmit}>
          <h3>Edit Meal</h3>
          <div>
            <label htmlFor="dateInput">
              Date
            </label>
            <div>
              <Field name="dateInput" component="input" type="date" id="date-input" />
            </div>
          </div>
          <div>
            <label htmlFor="mealDescription">Meal Description</label>
            <div>
              <Field name="mealDescription" component="input" type="text" id="mealDesc" />
            </div>
          </div>
          <div>
            <label htmlFor="timeInput">Update Time</label>
            <div>
              <Field id="time-picker" name="timeInput" component={props =>
                <TimePickerComponent {...props} time={this.props.time} />
              } type="time" />
            </div>
          </div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button id="cancel-btn" onClick={(e) => {
            e.preventDefault()
            window.location="/dashboard"
          }}>
            Cancel
          </button>
        </form>
        <button
          id="edit-meal-delete-btn"
          className="delete-button"
          disabled={pristine || submitting}
          onClick={() => this.props.dispatch(deleteMeal(this.props.id))}
          >
          Delete Meal
        </button>
      </div>
    )
  }
}

EditMealForm = reduxForm({
  form: 'editMeal',
  enableReinitialize : true
})(EditMealForm)

const mapStateToProps = (state) => ({
  date: state.user.currentSelectedEvent.start,
  time: state.user.currentSelectedEvent.startTime,
  title: state.user.currentSelectedEvent.title,
  initialValues: state.user.currentSelectedEvent,
  id: state.user.currentSelectedEvent._id
})

export default connect(mapStateToProps)(EditMealForm)
