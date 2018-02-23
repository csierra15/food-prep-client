import React from 'react'
import './MealPlan.css'

const MealPlan = () => {
  return (
    <div className="meal-plan">
      <header role="banner">
        <h1>Add a Meal</h1>
      </header>
      <section>
        <form id="new-plan-form">

          <select>
            <option>Pick a day</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>

          <select>
            <option>Pick a meal</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>

          <label htmlFor="meal-description">What are you eating?</label>
          <textarea name="meal-description" rows="3" placeholder="bacon, egg, and cheese muffins"></textarea>

          <button type="submit">Add meal</button>
        </form>
      </section>
    </div>
  )
}

export default MealPlan
