import InitialState from './InitialState'
import {
  FETCH_HOME_PAGE_SONGS,
  FETCH_HOME_PAGE_SONGS_SUCCESS,
  FETCH_HOME_PAGE_SONGS_ERROR
} from '../constants/ActionTypes'

export default (state = InitialState.home, action) => {
  switch (action.type) {
    case FETCH_HOME_PAGE_SONGS:
      return Object.assign({}, state, { ...InitialState.home })
    case FETCH_HOME_PAGE_SONGS_SUCCESS:
      return Object.assign({}, state, { isError: false, list: Object.keys(action.songs) })
    case FETCH_HOME_PAGE_SONGS_ERROR:
      return Object.assign({}, state, { ...InitialState.home, isError: true })
    default:
      return state
  }
}
