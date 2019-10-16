import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'

import {rootReducer} from './rootReducer'

// createReducer

const store = createStore(rootReducer, applyMiddleware(logger))

export {store}
