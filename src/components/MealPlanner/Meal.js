import React from 'react'

const Meal = (props) => {
  return (
    <div className="Rtable-cell">
      {props.mealPlan.meals.name}
      <input type="text" name="mealInput" onBlur={console.log('hello!')} />
    </div>
  )
}

export default Meal
