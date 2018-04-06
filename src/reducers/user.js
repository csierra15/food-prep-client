const initialState = {
  token: '',
  loggedIn: false,
  meals: [],
  events: [],
  lists: [],
  currentSelectedEvent: {},
  currentSelectedList: {},
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

      case 'FETCH_LIST_DATA_SUCCESS':
      return {
        ...state,
        lists: action.lists
      }

      case 'GET_MEAL_INFO':
      return {
        ...state,
        currentSelectedEvent: action.info,
        isOpen: true
      }

      case 'GET_LIST_INFO':
      return {
        ...state,
        currentSelectedList: action.info
      }

      case 'TRIGGER_LIST_MODAL':
      return {
        ...state,
        isOpen: true
      }

      case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false
      }

      case 'DELETE_CONTENT_ITEM':
      const content = state.currentSelectedList.content.filter((item, index) => index !== action.index)
      return {
        ...state,
        currentSelectedList: {
          ...state.currentSelectedList,
          content
        }
      }

      case 'ADD_CONTENT_ITEM':
      return {
        ...state,
        currentSelectedList: {
          ...state.currentSelectedList,
          content: [...state.currentSelectedList.content, action.item]
        }
      }

    default:
      return state
  }
}

export default user
