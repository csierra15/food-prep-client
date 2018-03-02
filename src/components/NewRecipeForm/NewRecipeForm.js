import React from 'react'
import './NewRecipeForm.css'
import AddIngredient from '../AddIngredient/AddIngredient'

const NewRecipeForm = () => {
  return(
    <form className="new-recipe-form" onSubmit={(e) => {
      e.preventDefault()
      const title = e.target.recipeTitleInput.value
      const author = e.target.recipeAuthorInput.value
      const url = e.target.recipeUrlInput.value
      console.log(title, author, url)
    }}>
      <label htmlFor="recipeTitleInput"></label>
      <input type="text" name="recipeTitleInput" placeholder="Spinach, Black Bean, and Chipotle Quesadillas Recipe" />


      <label htmlFor="recipeAuthorInput"></label>
      <input type="text" name="recipeAuthorInput" placeholder="J. Kenji López-Alt" />


      <label htmlFor="recipeUrlInput"></label>
      <input type="text" name="recipeUrlInput" placeholder="http://www.seriouseats.com/recipes/2017/02/spinach-black-bean-chipotle-quesadilla-recipe.html" />

      <AddIngredient />
    </form>
  )
}

export default NewRecipeForm
