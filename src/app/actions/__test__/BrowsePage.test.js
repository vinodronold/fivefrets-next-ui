import {
  FetchBrowsePageSongs,
  FetchBrowsePageSongsSuccess,
  FetchBrowsePageSongsError,
  MoveToBrowsePage
} from '../BrowsePage'
import {
  FETCH_BROWSE_PAGE_SONGS,
  FETCH_BROWSE_PAGE_SONGS_ERROR,
  FETCH_BROWSE_PAGE_SONGS_SUCCESS,
  MOVE_TO_BROWSE_PAGE
} from '../../constants/ActionTypes'

describe('BrowsePage Actions', () => {
  it('fetch browse page song action should return Type FETCH_BROWSE_PAGE_SONGS', () => {
    const _fetch_browse_page_songs = {
      type: FETCH_BROWSE_PAGE_SONGS
    }
    expect(FetchBrowsePageSongs()).toEqual(_fetch_browse_page_songs)
  })
  it('fetch Browse page song success action should return Type FETCH_browse_PAGE_SONGS_SUCCESS', () => {
    const _start = 'A'
    const _page = 1
    const _total_pages = 10
    const _songs = 'songs'
    const _fetch_browse_page_songs_success = {
      type: FETCH_BROWSE_PAGE_SONGS_SUCCESS,
      start: _start,
      page: _page,
      total_pages: _total_pages,
      songs: _songs
    }
    expect(FetchBrowsePageSongsSuccess(_start, _page, _total_pages, _songs)).toEqual(_fetch_browse_page_songs_success)
  })
  it('fetch Browse page song error action should return Type FETCH_browse_PAGE_SONGS_ERROR', () => {
    const _fetch_browse_page_songs_error = {
      type: FETCH_BROWSE_PAGE_SONGS_ERROR
    }
    expect(FetchBrowsePageSongsError()).toEqual(_fetch_browse_page_songs_error)
  })

  it('move to browse page action should return Type MOVE_TO_BROWSE_PAGE', () => {
    const _page = 1
    const _move_to_browse_page = {
      type: MOVE_TO_BROWSE_PAGE,
      page: _page
    }
    expect(MoveToBrowsePage(_page)).toEqual(_move_to_browse_page)
  })
})
