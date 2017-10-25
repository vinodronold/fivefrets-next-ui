import { all, fork } from 'redux-saga/effects'
import { FetchSearchResultSaga } from './SearchBoxSaga'

export default function* rootSaga() {
  yield all([fork(FetchSearchResultSaga)])
}
