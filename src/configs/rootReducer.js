import {combineReducers} from 'redux'
import {counterReducer} from '../reducers/counterReducer'
import {formReducer} from '../reducers/formReducer'
import {users} from '../reducers/users'

export const rootReducer = combineReducers({
  counterReducer,
  formReducer,
  users,
})
