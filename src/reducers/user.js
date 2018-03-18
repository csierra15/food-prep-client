const initialState = {
  data:{},
  token: '',
  loggedIn: false,
  meals: [
    {
      name: "oatmeal",
      category: "morning",

    }
  ],
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
      return {
        ...state,
        token: action.token,
        loggedIn: true

      }

      case 'ADD_MEAL':
      return {
        ...state,
        mealPlan: action.content
      }

    default:
      return state
  }
}

export default user
