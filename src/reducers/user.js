const initialState = {
  data:{},
  token: '',
  loggedIn: false,
  meals: [],
  events: [],
  lists: []
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

      case 'FETCH_MEAL_DATA':
      return {
        ...state,
        events: action.events
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
