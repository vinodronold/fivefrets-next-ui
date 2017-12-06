import {
  FETCH_BROWSE_PAGE_SONGS,
  FETCH_BROWSE_PAGE_SONGS_ERROR,
  FETCH_BROWSE_PAGE_SONGS_SUCCESS,
  MOVE_TO_BROWSE_PAGE
} from '../constants/ActionTypes'

export const FetchBrowsePageSongs = (start, page) => ({
  type: FETCH_BROWSE_PAGE_SONGS,
  start,
  page
})

export const FetchBrowsePageSongsSuccess = (start, page, total_pages, songs) => ({
  type: FETCH_BROWSE_PAGE_SONGS_SUCCESS,
  start,
  page,
  total_pages,
  songs
})

export const FetchBrowsePageSongsError = () => ({
  type: FETCH_BROWSE_PAGE_SONGS_ERROR
})

export const MoveToBrowsePage = page => ({
  type: MOVE_TO_BROWSE_PAGE,
  page
})
