import { combineReducers } from 'redux'
import locationReducer from './location'
import userReducer from './userReducer' //add new Reducer

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    //add new reducer
    user: userReducer,
    ...asyncReducers
  })
}


/*export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}*/

export default makeRootReducer
