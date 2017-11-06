import {
  FETCH_HOME_PAGE_SONGS,
  FETCH_HOME_PAGE_SONGS_SUCCESS,
  FETCH_HOME_PAGE_SONGS_ERROR
} from '../constants/ActionTypes'

export const FetchHomePageSongs = () => ({
  type: FETCH_HOME_PAGE_SONGS
})

export const FetchHomePageSongsSuccess = songs => ({
  type: FETCH_HOME_PAGE_SONGS_SUCCESS,
  songs
})

export const FetchHomePageSongsError = () => ({
  type: FETCH_HOME_PAGE_SONGS_ERROR
})
