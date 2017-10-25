import {
  TOGGLE_SEARCH,
  CATPURE_SEARCH_INPUT,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_ERROR
} from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.search, action) => {
  switch (action.type) {
    case CATPURE_SEARCH_INPUT:
      return Object.assign({}, state, { input: action.input })
    case TOGGLE_SEARCH:
      return Object.assign({}, state, { ...InitialState.search })
    case FETCH_SEARCH_RESULT_SUCCESS:
      return Object.assign({}, state, { result: action.result, IsError: false })
    case FETCH_SEARCH_RESULT_ERROR:
      return Object.assign({}, state, { result: [], IsError: true })
    default:
      return state
  }
}
