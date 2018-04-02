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
        events: action.events,
        isOpen: false
      }

      case 'GET_MEAL_INFO':
      return {
        ...state,
        currentSelectedEvent: action.content,
        isOpen: true
      }

      case 'FETCH_LIST_DATA_SUCCESS':
      return {
        ...state,
        lists: action.lists
      }

      case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false
      }

    default:
      return state
  }
}

export default user
