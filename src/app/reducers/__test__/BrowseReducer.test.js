import InitialState from '../InitialState'
import BrowseReducer from '../BrowseReducer'
import {
  MoveToBrowsePage,
  FetchBrowsePageSongs,
  FetchBrowsePageSongsSuccess,
  FetchBrowsePageSongsError,
  NoAction
} from '../../actions'

describe('Browse Reducer', () => {
  it('MOVE_TO_BROWSE_PAGE should set the curr_page', () => {
    const _next_state = {
      curr_page: 2
    }
    expect(BrowseReducer({}, MoveToBrowsePage(2))).toEqual(_next_state)
  })

  it('Fetch Browse Page Songs should set start', () => {
    const _next_state = {
      start: 'a',
      curr_page: 2,
      isError: false
    }
    expect(BrowseReducer({}, FetchBrowsePageSongs('a', 2))).toEqual(_next_state)
  })

  it('Fetch Browse Page Songs Success should set the song IDs', () => {
    const _songs = { '1': { test: 'ok' }, '2': { test: 'ok' }, '3': { test: 'ok' } }
    const _next_state = { pages: { a: { '1': ['1', '2', '3'] } }, total_pages: 10 }
    expect(BrowseReducer({ pages: { a: {} } }, FetchBrowsePageSongsSuccess('a', 1, 10, _songs))).toEqual(_next_state)
  })

  it('Fetch Browse Page Songs Error should set the Error', () => {
    const _next_state = { isError: true }
    expect(BrowseReducer({}, FetchBrowsePageSongsError())).toEqual(_next_state)
  })

  it('Initial State should match the InitialState.browse', () => {
    expect(BrowseReducer(undefined, NoAction())).toEqual(InitialState.browse)
  })
})
