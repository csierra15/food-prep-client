import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import './MealForm.css'

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
            <Field name="dateInput" component="input" type="date" placeholder="MM/DD/YYYY" />
          </div>
        </div>
        <div>
          <label htmlFor="mealTime">Meal Time</label>
          <div>
            <label htmlFor="morning">
              <Field name="time" component="input" type="radio" value="morning" id="morning" />
              {' '}Morning
            </label>
          </div>
          <div>
            <label htmlFor="afternoon">
              <Field name="time" component="input" type="radio" value="afternoon" id="afternoon" />
              {' '}Afternoon
            </label>
          </div>
          <div>
            <label htmlFor="evening">
              <Field name="time" component="input" type="radio" value="evening" id="evening" />
              {' '}Evening
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="mealDescription">What are you eating?</label>
          <div>
            <Field name="mealDescription" component="input" type="text" id="mealDesc" placeholder="muffins" />
          </div>
        </div>
        <button
          type="submit"
          disabled={
            props.pristine ||
            props.submitting
          }>
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
