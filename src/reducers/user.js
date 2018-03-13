const initialState = {
  data:{},
  token: '',
  loggedIn: false,
  mealPlan: [],
  recipes: [],
  shoppingList: [],
  pantry: []
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        data: action.user
      }

      case 'LOGIN_USER_SUCCESS':
      console.log('hello there');
      return {
        ...state,
        token: action.token,
        loggedIn: true
      }

    default:
      return state
  }
}

export default user
