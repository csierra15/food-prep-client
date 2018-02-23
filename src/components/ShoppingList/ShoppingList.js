import React from 'react'
import './ShoppingList.css'

const ShoppingList = () => {
  return (
    <div className="shopping-list-card">
      <h4>Shopping List Title</h4>
      <div className="container">
        <p>Shopping list content</p>
      </div>

      <button>New List</button>
    </div>
  )
}

export default ShoppingList
