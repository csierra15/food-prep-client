import React from 'react'
import './Recipes.css'

const Recipes = () => {
  return (
    <div className="recipe-card">
      <p className="recipe-title">Recipe Title</p>
      <p className="ingredient-title">Ingredients</p>
      <ul className="ingredient-list">
        <li className="ingredient">Ingredient 1</li>
        <li className="ingredient">Ingredient 2</li>
        <li className="ingredient">Ingredient 3</li>
      </ul>
      <p className="instructions-title">Instructions</p>
      <p className="instructions">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia suscipit velit, vitae auctor erat auctor vel.
        Curabitur finibus erat vel dolor mattis rhoncus.
        Etiam sed ultrices nunc, id cursus nunc.
        Quisque rhoncus mattis sapien, at lacinia elit ultricies non.
        Aenean maximus hendrerit risus, eget scelerisque ante auctor nec.
      </p>

      <button>New Recipe</button>
    </div>
  )
}

export default Recipes
