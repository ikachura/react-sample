import {combineReducers} from 'redux'
import {counterReducer} from '../reducers/counterReducer'
import {formReducer} from '../reducers/formReducer'

export const rootReducer = combineReducers({
  counterReducer,
  formReducer,
})
