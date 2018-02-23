import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <header role="banner">
        <h1>Hello User!</h1>
        <h2>Here's what you're eating today</h2>
      </header>

      <section>
        <h3>Wednesday 2/21/18</h3>
          <table>
            <tr>
              <th>Breakfast</th>
              <th>Snack</th>
              <th>Lunch</th>
              <th>Snack</th>
              <th>Dinner</th>
            </tr>
            <tr>
              <td>Green smoothie and coffee</td>
              <td>Trail Mix</td>
              <td>Chicken Salad</td>
              <td>Veggie Sticks</td>
              <td>Steak and sweet potatoes</td>
            </tr>
          </table>
      </section>
    </div>
  )
}

export default Dashboard
