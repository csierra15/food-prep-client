import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import './MealForm.css'
import  TimePickerComponent from '../TimePicker/TimePicker'

let MealForm = (props) => {
  const { handleSubmit, submitting, pristine, reset } = props
  return (
    <div className="meal-plan">
      <form id="new-plan-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dateInput">
            Date
          </label>
          <div>
            <Field name="dateInput" component="input" type="date" placeholder="MM/DD/YYYY" className="meal-form-input" />
          </div>
        </div>
        <div>
          <label htmlFor="mealDescription">What are you eating?</label>
          <div>
            <Field name="mealDescription" component="input" type="text" id="mealDesc" placeholder="muffins" className="meal-form-input" />
          </div>
        </div>
        <div>
          <label htmlFor="timeInput">Select Time</label>
          <div>
            <Field name="timeInput" component={props =>
              <TimePickerComponent {...props} />
            } type="time" id="timeInput" placeholder="12:00 PM" className="meal-form-input" />
          </div>
        </div>
        <button type="submit"
          onClick={(dispatch) => dispatch(reset('meal'))}
          disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </div>
  )
}

MealForm = reduxForm({
  form: 'meal'
})(MealForm)

export default connect()(MealForm)
