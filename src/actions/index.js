import {API_BASE_URL} from '../config'
const authToken = localStorage.getItem('token')
const userId = localStorage.getItem('userId')

export const ADD_MEAL = 'ADD_MEAL'
export const addMeal = (values) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/meals/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({values})
    })
    .then(res => res.json())
    .then((json) => {
      console.log('meal added! fetching data...')
      dispatch(fetchMealData())
      window.location = '/dashboard'
    })
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
  return (dispatch) => {
    fetch(`${API_BASE_URL}/meals/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(json => console.log('fetching meal data...', json))
    .catch(err => console.log(err))
  }
}

export const ADD_LIST = 'ADD_LIST'
export const addList = (title) => {
  type: ADD_LIST,
  title
}

export const DELETE_LIST = 'DELETE_LIST'
export const deleteList = () => {
  type: DELETE_LIST
}

export const UPDATE_LIST = 'UPDATE_LIST'
export const updateList = (content, index) => {
  type: UPDATE_LIST,
  content,
  index
}

export const FETCH_LIST_DATA = 'FETCH_LIST_DATA'
export const fetchListData = () => dispatch => {
  type: FETCH_LIST_DATA
}

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
export const addListItem = (text, listIndex) => {
  type: ADD_LIST,
  text,
  listIndex
}

export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'
export const deleteListItem = () => {
  type: DELETE_LIST
}

export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM'
export const editListItem = (content, index) => {
  type: EDIT_LIST_ITEM,
  content,
  index
}
