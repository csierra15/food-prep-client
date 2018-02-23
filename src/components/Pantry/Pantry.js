import React from 'react'
import './Pantry.css'

const Pantry = () => {
  return (
    <div>
      <header role="banner">
        <h1>Pantry</h1>
      </header>

      <section>
        <h3>Produce</h3>
          <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Celery</li>
          </ul>

        <h3>Dry</h3>
          <ul>
            <li>Almonds</li>
            <li>Granola</li>
            <li>Protein Powder</li>
          </ul>

        <h3>Produce</h3>
          <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Celery</li>
          </ul>

        <h3>Dairy</h3>
          <ul>
            <li>Eggs</li>
            <li>Milk</li>
            <li>Yogurt</li>
          </ul>

        <h3>Meat</h3>
          <ul>
            <li>Steaks</li>
            <li>Chicken Breasts</li>
            <li>Salmon</li>
          </ul>
      </section>
    </div>
  )
}

export default Pantry
