const initialState = {
  userName: 'Carly',
  recipes: [
    {
      recipeTitle: '',
      ingredients: [
        {}
      ]
    }
  ]
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case '':
      return {}

    default:
      return state
  }
}

export default user
