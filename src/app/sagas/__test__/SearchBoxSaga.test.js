import { call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getSearchResult } from '../api/YoutubeDataAPI'
import { CATPURE_SEARCH_INPUT } from '../../constants/ActionTypes'
import { FetchSearchResultSuccess, FetchSearchResultError } from '../../actions'
import { FetchSearchResultSaga, FetchSearchResult } from '../SearchBoxSaga'

describe('Search Box Saga', () => {
  const input = 'input'
  const result = [{ id: 1, title: 'title', subtitle: 'subtitle' }]

  it('should take latest CATPURE_SEARCH_INPUT action', () => {
    const _generator = FetchSearchResultSaga()
    expect(_generator.next().value).toEqual(takeLatest(CATPURE_SEARCH_INPUT, FetchSearchResult))
    expect(_generator.next().done).toBe(true)
  })

  it('should dispatch FetchSearchResultSuccess action when api call is success', () => {
    const _generator = FetchSearchResult({ input })
    expect(_generator.next().value).toEqual(call(delay, 500))
    expect(_generator.next().value).toEqual(call(getSearchResult, input))
    expect(_generator.next(result).value).toEqual(put(FetchSearchResultSuccess(result)))
    expect(_generator.next().done).toBe(true)
  })

  it('should dispatch FetchSearchResultError action when api call is error', () => {
    const error = new Error('API ERROR')
    const _generator = FetchSearchResult({ input })
    expect(_generator.next().value).toEqual(call(delay, 500))
    expect(_generator.next().value).toEqual(call(getSearchResult, input))
    expect(_generator.throw(error).value).toEqual(put(FetchSearchResultError()))
    expect(_generator.next().done).toBe(true)
  })
})
