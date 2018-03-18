import { combineReducers } from 'redux'
import user from './user'
import pantry from './pantry'
import recipes from './recipes'
import shoppingLists from './shopping-lists'

const rootReducer = combineReducers({
  user,
  pantry,
  recipes,
  shoppingLists
})

export default rootReducer
