import { takeLatest, put, call } from 'redux-saga/effects'
import { FETCH_HOME_PAGE_SONGS } from '../constants/ActionTypes'
import { FetchHomePageSongsSuccess, FetchHomePageSongsError } from '../actions'
import getHomePageSongs from './api/getHomePageSongs'

export const FetchHomePageSongs = function*() {
  try {
    let _songs = yield call(getHomePageSongs)
    yield put(FetchHomePageSongsSuccess(_songs))
  } catch (e) {
    yield put(FetchHomePageSongsError())
  }
}

export const FetchHomePageSongstSaga = function*() {
  yield takeLatest(FETCH_HOME_PAGE_SONGS, FetchHomePageSongs)
}
