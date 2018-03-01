const initialState = {
  userName: 'Carly',
  recipes: [
    {
      mealType: 'Breakfast',
      date: '3/05/2018',
      recipeTitle: 'Breakfast burritos',
      ingredients: ['tortillas', 'eggs', 'cheese', 'bacon']
    },
    {
      mealType: 'Lunch',
      date: '3/05/2018',
      recipeTitle: 'Grilled chicken salad with southwest dressing',
      ingredients: ['lettuce', 'grilled chicken', 'cheese', 'southwest ranch', 'tomatoes']
    },
    {
      mealType: 'Dinner',
      date: '3/05/2018',
      recipeTitle: 'Ribeye and broccoli',
      ingredients: ['ribeye steaks', 'broccoli']
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
