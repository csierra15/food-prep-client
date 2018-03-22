import React from 'react'
import './MealForm.css'
import { Field, reduxForm } from 'redux-form'

let MealForm = (props) => {
  const { handleSubmit } = props
  return (
    <div className="meal-plan">
      <header role="banner">
        <h1>Add a Meal</h1>
      </header>
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
              <Field name="time" component="input" type="radio" value="morning" />
              {' '}Morning
            </label>
          </div>
          <div>
            <label htmlFor="afternoon">
              <Field name="time" component="input" type="radio" value="afternoon" />
              {' '}Afternoon
            </label>
          </div>
          <div>
            <label htmlFor="evening">
              <Field name="time" component="input" type="radio" value="evening" />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

MealForm = reduxForm({
  form: 'meal'
})(MealForm)

export default MealForm
