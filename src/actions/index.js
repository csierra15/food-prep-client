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
    .then(json => {
      const events = json.map(item => {
        return {
          start: moment(item.start).toDate(),
          end: moment(item.end).toDate(),
          startTime: item.startTime,
          title: item.title,
          _id: item._id
        }
      })

      dispatch(fetchMealDataSuccess(events))
    })
    .catch(err => console.log(err))
  }
}

export const UPDATE_MEAL = 'UPDATE_MEAL'
export const updateMeal = (values) => {
  const mealId = values._id
  let start = moment(values.start, 'YYYY-MM-DD hh:mm a')
  let end = moment(start).add(1, 'hours')
  const updatedMeal = {
    title: values.mealDescription,
    start,
    end
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
    .then(json => {
      console.log(json)
      dispatch(fetchMealDataSuccess(json))
    })
    .catch(err => console.log(err))
  }
}

export const DELETE_MEAL = 'DELETE_MEAL'
export const deleteMeal = (mealId) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/meals/${userId}/${mealId}`, {
      method: 'DELETE',
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

export const FETCH_MEAL_DATA_SUCCESS = 'FETCH_MEAL_DATA_SUCCESS'
export const fetchMealDataSuccess = (events) => ({
  type: FETCH_MEAL_DATA_SUCCESS,
  events
})

export const GET_MEAL_INFO = 'GET_MEAL_INFO'
export const getMealInfo = (info) => ({
  type: GET_MEAL_INFO,
  info
})

export const ADD_LIST = 'ADD_LIST'
export const addList = (values) => {
  const list = {
    title: values.title,
    content: values.content,
    date: moment()
  }
  return (dispatch) => {
    fetch(`${API_BASE_URL}/lists/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({values: list})
    })
    .then(res => {
      res.json()
      window.location = '/lists'
    })
    .catch(err => console.log(err))
  }
}

export const DELETE_LIST = 'DELETE_LIST'
export const deleteList = (listId) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/lists/${userId}/${listId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(fetchListDataSuccess(json))
      window.location = '/lists'
    })
    .catch(err => console.log(err))
  }
}

export const UPDATE_LIST = 'UPDATE_LIST'
export const updateList = (values) => {
  let listId = values._id
  return (dispatch) => {
    fetch(`${API_BASE_URL}/lists/${userId}/${listId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({values})
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      dispatch(fetchListData())
    })
    .catch(err => console.log(err))
  }
}

export const FETCH_LIST_DATA = 'FETCH_LIST_DATA'
export const fetchListData = () => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/lists/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then((json) => {
      dispatch(fetchListDataSuccess(json))
    })
    .catch(err => console.log(err))
  }
}

export const FETCH_LIST_DATA_SUCCESS = 'FETCH_LIST_DATA_SUCCESS'
export const fetchListDataSuccess = (lists) => ({
  type: FETCH_LIST_DATA_SUCCESS,
  lists
})

export const GET_LIST_INFO = 'GET_LIST_INFO'
export const getListInfo = (info) => ({
  type: GET_LIST_INFO,
  info
})

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({
  type: CLOSE_MODAL
})
