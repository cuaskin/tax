/** Action and ActionCretors
 * If u want create diffirent file.
 */

const INIT_USER = "INIT_USER";
//ActionCreators
export function userInit(user = {}) {
  //action
  return {
    type: INIT_USER,
    payload: user
  };
}

/** Reducer
 * convert oldState to newState.
 */
export default function userReducer(state = {}, action) {
  return action.type === INIT_USER
    ? Object.assign({}, action.payload)
    :state
}
