import { compose, createStore as createReduxStore } from "redux";
import { browserHistory } from "react-router";
import makeRootReducer from "./reducers";
import { updateLocation } from "./location";

const __DEV__ = process.env.NODE_ENV === "development";

const createStore = (initialState = {}) => {
  // Store Enhancers
  let composeEnhancers = compose;

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
      console.log("İsRunRedux:" + __DEV__);
    }
  }

  // Store Instantiation
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers()
  );
  store.asyncReducers = {};

  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const reducers = require("./reducers").default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};

export default createStore;
