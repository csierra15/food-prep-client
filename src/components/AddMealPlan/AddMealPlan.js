import React from 'react'
import './AddMealPlan.css'

const AddMealPlan = () => {
  return (
    <div className="meal-plan">
      <header role="banner">
        <h1>Add a Meal</h1>
      </header>
      <section>
        <form id="new-plan-form" onSubmit={(e) => {
    			e.preventDefault()
          const day = e.target.daySelect.value
          const meal = e.target.mealSelect.value
          const mealDesc = e.target.mealDescription.value
    			console.log(day, meal, mealDesc)
    		}}>

          <select name="daySelect">
            <option>Pick a day</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <select name="mealSelect">
            <option>Pick a meal</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>

          <label htmlFor="mealDescription">What are you eating?</label>
          <textarea name="mealDescription" rows="3" placeholder="bacon, egg, and cheese muffins"></textarea>

          <button type="submit">Add meal</button>
        </form>
      </section>
    </div>
  )
}

export default AddMealPlan
