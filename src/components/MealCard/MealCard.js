import React from 'react'
import './MealCard.css'
import MealList from '../MealList/MealList'
import {connect} from 'react-redux'

const MealCard = (props) => {
  return(
    <div className="meal-card">
      <form>
        <input placeholder="new item" className="new-item" name="userInput"></input>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.user.meals
})

export default connect(mapStateToProps)(MealCard)
