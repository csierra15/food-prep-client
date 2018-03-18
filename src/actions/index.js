import {API_BASE_URL} from '../config'

export const ADD_MEAL = 'ADD_MEAL'
export const addMeal = (content) => {
  return(dispatch) => {
    fetch(`${API_BASE_URL}/meals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
}

export const DELETE_MEAL = 'DELETE_MEAL'
export const deleteMeal = (id) => {
  type: DELETE_MEAL,
  id
}

export const UPDATE_MEAL = 'UPDATE_MEAL'
export const updateMeal = (content, index) => {
  type: UPDATE_MEAL,
  content,
  index
}

export const FETCH_MEAL_DATA = 'FETCH_MEAL_DATA'
export const fetchMealData = () => {
  type: FETCH_MEAL_DATA
}
