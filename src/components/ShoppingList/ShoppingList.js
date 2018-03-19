import React from 'react'
import './ShoppingList.css'

const ShoppingList = (props) => {
  return (
    <div className="shopping-list-card">
      <h4>Keep your shopping lists here!</h4>
      <div className="container">
        <ul>
          <h5>{props.shoppingListTitle}</h5>
          {props.shoppingListItems}
          <form>
            <input placeholder="new item" className="new-item" name="userInput"></input>
          </form>
        </ul>
      </div>

      <button>New List</button>
    </div>
  )
}

export default ShoppingList
