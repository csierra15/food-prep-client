import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import pantry from './pantry'
import recipes from './recipes'
import shoppingLists from './shopping-lists'

const rootReducer = combineReducers({
  user,
  form: formReducer,
  pantry,
  recipes,
  shoppingLists
})

export default rootReducer
