import React from 'react'
import './ListForm.css'

const ListForm = () => {
  return(
    <form>
      <label htmlFor="list-title">
        <input type="text" name ="list-title" placeholder="Grocery List" />
      </label>

      <label htmlFor="list-content">
        <input type="text" name ="" placeholder="apples" />
      </label>

      <button className="add-ingredient-button">Add Ingredient</button>

      <ul className="ingredient-list">
        <li className="ingredient"></li>
      </ul>

      <button type="submit" className="save-list-button">Save List</button>
    </form>
  )
}

export default ListForm
