import { all, fork } from 'redux-saga/effects'
import { FetchSearchResultSaga } from './SearchBoxSaga'
import { FetchHomePageSongstSaga } from './HomePageSaga'

export default function* rootSaga() {
  yield all([fork(FetchSearchResultSaga), fork(FetchHomePageSongstSaga)])
}
