import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { hashHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
import PromiseMiddleware from 'redux-promise'

import rootReducer from './reducers'
import createFetchMiddleware from 'redux-composable-fetch'

// 创建多异步middleware
const FetchMiddleware = createFetchMiddleware()

const finalCreateStore = compose(
  applyMiddleware(
    ThunkMiddleware,
    PromiseMiddleware,
    FetchMiddleware,
    routerMiddleware(hashHistory)
  )
)(createStore)

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}))

export default function configureStore(initialState){
  const store = finalCreateStore(reducer, initialState)
  return store
}