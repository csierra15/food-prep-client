const initialState = {
  token: '',
  loggedIn: false,
  meals: [],
  events: [],
  lists: [],
  currentSelectedEvent: {},
  isOpen: false
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        data: action.user
      }

      case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        token: action.token,
        loggedIn: true
      }

      case 'FETCH_MEAL_DATA_SUCCESS':
      return {
        ...state,
        events: action.events
      }

      case 'GET_MEAL_INFO':
      return {
        ...state,
        currentSelectedEvent: action.content,
        isOpen: true
      }

      case 'ADD_LIST':
      return {
        ...state
      }

    default:
      return state
  }
}

export default user
