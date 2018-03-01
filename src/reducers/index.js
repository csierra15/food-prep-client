import { combineReducers } from 'redux'
import user from './user'
import mealPlan from './meal-plan'
import pantry from './pantry'
import recipes from './recipes'
import shoppingLists from './shopping-lists'

const rootReducer = combineReducers({
  user,
  mealPlan,
  pantry,
  recipes,
  shoppingLists
})

export default rootReducer
