import {API_BASE_URL} from '../config'
import moment from 'moment'
const authToken = localStorage.getItem('token')
const userId = localStorage.getItem('userId')

export const ADD_MEAL = 'ADD_MEAL'
export const addMeal = (values) => {
  let start = moment(values.dateInput + 'T' + values.timeInput, 'YYYY-MM-DD hh:mm a')
  let end = moment(start).add(1, 'hours')
  const meal = {
    mealDescription: values.mealDescription,
    timeInput: values.timeInput,
    start,
    end
  }
  return (dispatch) => {
    fetch(`${API_BASE_URL}/meals/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({values: meal})
    })
    .then(res => {
      res.json()
      //window.location = '/dashboard'
    })
    .catch(err => console.log(err))
  }
}

export const FETCH_MEAL_DATA_SUCCESS = 'FETCH_MEAL_DATA_SUCCESS'
export const fetchMealDataSuccess = (events) => ({
  type: FETCH_MEAL_DATA_SUCCESS,
  events
})

export const FETCH_MEAL_DATA = 'FETCH_MEAL_DATA'
export const fetchMealData = () => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/meals/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(json => dispatch(fetchMealDataSuccess(json)))
    .catch(err => console.log(err))
  }
}

export const GET_MEAL_INFO = 'GET_MEAL_INFO'
export const getMealInfo = (content) => ({
  type: GET_MEAL_INFO,
  content
})

export const UPDATE_MEAL = 'UPDATE_MEAL'
export const updateMeal = (values) => {
  const mealId = values._id
  const updatedMeal = {
    title: values.mealDescription,
    start: values.startTime,
    end: moment(values.startTime).add(1, 'hours')
  }
  return (dispatch) => {
    fetch(`${API_BASE_URL}/meals/${userId}/${mealId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({values: updatedMeal})
    })
    .then(res => res.json())
    .then(json => dispatch(updateMealSuccess(json)))
    .catch(err => console.log(err))
  }
}

export const UPDATE_MEAL_SUCCESS = 'UPDATE_MEAL_SUCCESS'
export const updateMealSuccess = (events) => ({
  type: UPDATE_MEAL_SUCCESS,
  events
})

export const DELETE_MEAL = 'DELETE_MEAL'
export const deleteMeal = (id) => ({
  type: DELETE_MEAL,
  id
})

export const ADD_LIST = 'ADD_LIST'
export const addList = (title) => ({
  type: ADD_LIST,
  title
})

export const DELETE_LIST = 'DELETE_LIST'
export const deleteList = () => ({
  type: DELETE_LIST
})

export const UPDATE_LIST = 'UPDATE_LIST'
export const updateList = (content, index) => ({
  type: UPDATE_LIST,
  content,
  index
})

export const FETCH_LIST_DATA = 'FETCH_LIST_DATA'
export const fetchListData = () => dispatch => ({
  type: FETCH_LIST_DATA
})

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
export const addListItem = (text, listIndex) => ({
  type: ADD_LIST,
  text,
  listIndex
})

export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'
export const deleteListItem = () => ({
  type: DELETE_LIST
})

export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM'
export const editListItem = (content, index) => ({
  type: EDIT_LIST_ITEM,
  content,
  index
})

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({
  type: CLOSE_MODAL
})
