import InitialState from './InitialState'
import {
  MOVE_TO_BROWSE_PAGE,
  FETCH_BROWSE_PAGE_SONGS,
  FETCH_BROWSE_PAGE_SONGS_SUCCESS,
  FETCH_BROWSE_PAGE_SONGS_ERROR
} from '../constants/ActionTypes'

export default (state = InitialState.browse, action) => {
  switch (action.type) {
    case MOVE_TO_BROWSE_PAGE:
      return { ...state, curr_page: action.page }
    case FETCH_BROWSE_PAGE_SONGS:
      return {
        ...state,
        start: action.start,
        curr_page: action.page,
        isError: InitialState.browse.isError
      }
    case FETCH_BROWSE_PAGE_SONGS_SUCCESS:
      const page = { ...state.pages[action.start], [action.page]: Object.keys(action.songs) }
      const pages = { ...state.pages, [action.start]: page }
      return { ...state, total_pages: action.total_pages, pages }
    case FETCH_BROWSE_PAGE_SONGS_ERROR:
      return { ...state, isError: !InitialState.browse.isError }
    default:
      return state
  }
}
