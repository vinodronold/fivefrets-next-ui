import { takeLatest, put, call } from 'redux-saga/effects'
import { FETCH_BROWSE_PAGE_SONGS } from '../constants/ActionTypes'
import { FetchBrowsePageSongsSuccess, FetchBrowsePageSongsError } from '../actions'
import getBrowsePageSongs from './api/getBrowsePageSongs'

export const FetchBrowsePageSongs = function*({ start, page }) {
  try {
    let _response = yield call(getBrowsePageSongs, start, page)
    yield put(FetchBrowsePageSongsSuccess(start, page, _response.total_pages, _response.songs))
  } catch (e) {
    yield put(FetchBrowsePageSongsError())
  }
}

export const FetchBrowsePageSongsSaga = function*() {
  yield takeLatest(FETCH_BROWSE_PAGE_SONGS, FetchBrowsePageSongs)
}
