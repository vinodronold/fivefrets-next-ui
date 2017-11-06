import { call, put, takeLatest } from 'redux-saga/effects'
import { FetchHomePageSongs, FetchHomePageSongstSaga } from '../HomePageSaga'
import { FETCH_HOME_PAGE_SONGS } from '../../constants/ActionTypes'
import { FetchHomePageSongsSuccess, FetchHomePageSongsError } from '../../actions'
import getHomePageSongs from '../api/getHomePageSongs'

describe('Home Page Saga', () => {
  const _api_result = { 1: { title: 'title 1' } }
  it('should take latest FETCH_HOME_PAGE_SONGS action', () => {
    const _generator = FetchHomePageSongstSaga()
    expect(_generator.next().value).toEqual(takeLatest(FETCH_HOME_PAGE_SONGS, FetchHomePageSongs))
    expect(_generator.next().done).toBe(true)
  })

  it('should dispatch FetchHomePageSongsSuccess action when api call is success', () => {
    const _generator = FetchHomePageSongs()
    expect(_generator.next().value).toEqual(call(getHomePageSongs))
    expect(_generator.next(_api_result).value).toEqual(put(FetchHomePageSongsSuccess(_api_result)))
    expect(_generator.next().done).toBe(true)
  })

  it('should dispatch FetchHomePageSongsError action when api call is error', () => {
    const error = new Error('API ERROR')
    const _generator = FetchHomePageSongs()
    expect(_generator.next().value).toEqual(call(getHomePageSongs))
    expect(_generator.throw(error).value).toEqual(put(FetchHomePageSongsError()))
    expect(_generator.next().done).toBe(true)
  })
})
