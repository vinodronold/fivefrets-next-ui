import { FetchHomePageSongs, FetchHomePageSongsSuccess, FetchHomePageSongsError } from '../HomePage'
import {
  FETCH_HOME_PAGE_SONGS,
  FETCH_HOME_PAGE_SONGS_SUCCESS,
  FETCH_HOME_PAGE_SONGS_ERROR
} from '../../constants/ActionTypes'

describe('HomePage Actions', () => {
  it('fetch home page song action should return Type FETCH_HOME_PAGE_SONGS', () => {
    const _fetch_home_page_songs = {
      type: FETCH_HOME_PAGE_SONGS
    }
    expect(FetchHomePageSongs()).toEqual(_fetch_home_page_songs)
  })
  it('fetch home page song success action should return Type FETCH_HOME_PAGE_SONGS_SUCCESS', () => {
    const _songs = 'songs'
    const _fetch_home_page_songs_success = {
      type: FETCH_HOME_PAGE_SONGS_SUCCESS,
      songs: _songs
    }
    expect(FetchHomePageSongsSuccess(_songs)).toEqual(_fetch_home_page_songs_success)
  })
  it('fetch home page song error action should return Type FETCH_HOME_PAGE_SONGS_ERROR', () => {
    const _fetch_home_page_songs_error = {
      type: FETCH_HOME_PAGE_SONGS_ERROR
    }
    expect(FetchHomePageSongsError()).toEqual(_fetch_home_page_songs_error)
  })
})
