import InitialState from './InitialState'
import { FETCH_HOME_PAGE_SONGS_SUCCESS } from '../constants/ActionTypes'

export default (state = InitialState.songs, action) => {
  switch (action.type) {
    case FETCH_HOME_PAGE_SONGS_SUCCESS:
      const _fetched_songs = Object.keys(action.songs).reduce((res, i) => {
        res[i] = { ...state[i], ...action.songs[i] }
        return res
      }, {})
      return Object.assign({}, state, { ..._fetched_songs })
    default:
      return state
  }
}
