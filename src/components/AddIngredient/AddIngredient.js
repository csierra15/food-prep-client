import React from 'react'

const AddIngredient = () => {
  return(
    <form>
      <label htmlFor="recipeIngredientsInput"></label>
      <input type="ingredients" name="recipeIngredientsInput" placeholder="4 tortillas" />

      <button className="add-ingredient-button">Add Ingredient</button>

      <ul className="ingredient-list">
        <li className="ingredient"></li>
      </ul>

      <button type="submit" className="save-recipe-button">Save Recipe</button>
    </form>
  )
}

export default AddIngredient
