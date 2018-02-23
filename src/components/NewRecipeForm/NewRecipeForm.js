import React from 'react'
import './NewRecipeForm.css'

const NewRecipeForm = () => {
  return(
    <form>
      <label htmlFor="recipe-title">
        <input type="text" placeholder="Spinach, Black Bean, and Chipotle Quesadillas Recipe" />
      </label>

      <label htmlFor="recipe-author">
        <input type="text" placeholder="J. Kenji López-Alt" />
      </label>

      <label htmlFor="recipe-url">
        <input type="text" placeholder="http://www.seriouseats.com/recipes/2017/02/spinach-black-bean-chipotle-quesadilla-recipe.html" />
      </label>

      <label htmlFor="recipe-ingredients">
        <input type="ingredients" placeholder="4 tortillas" />
      </label>

      <button className="add-ingredient-button">Add Ingredient</button>

      <ul className="ingredient-list">
        <li className="ingredient"></li>
      </ul>

      <button type="submit" className="save-recipe-button">Save Recipe</button>
    </form>
  )
}

export default NewRecipeForm
