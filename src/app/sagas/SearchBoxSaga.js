import { takeLatest, put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { CATPURE_SEARCH_INPUT } from '../constants/ActionTypes'
import { FetchSearchResultSuccess, FetchSearchResultError } from '../actions'
import { getSearchResult } from './api/YoutubeDataAPI'

export const FetchSearchResult = function*({ input }) {
  yield call(delay, 500)
  try {
    let result = yield call(getSearchResult, input)
    yield put(FetchSearchResultSuccess(result))
  } catch (e) {
    yield put(FetchSearchResultError())
  }
}

export const FetchSearchResultSaga = function*() {
  yield takeLatest(CATPURE_SEARCH_INPUT, FetchSearchResult)
}
