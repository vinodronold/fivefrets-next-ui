import { FetchBrowsePageSongsSaga, FetchBrowsePageSongs } from '../BrowsePageSaga'
import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_BROWSE_PAGE_SONGS } from '../../constants/ActionTypes'
import getBrowsePageSongs from '../api/getBrowsePageSongs'
import { FetchBrowsePageSongsSuccess, FetchBrowsePageSongsError } from '../../actions'

describe('Browse Page Saga', () => {
  const start = 'a'
  const page = 1
  const _api_result = { total_pages: 10, songs: [] }
  it('should take latest FETCH_BROWSE_PAGE_SONGS action', () => {
    const _generator = FetchBrowsePageSongsSaga()
    expect(_generator.next().value).toEqual(takeLatest(FETCH_BROWSE_PAGE_SONGS, FetchBrowsePageSongs))
    expect(_generator.next().done).toBe(true)
  })

  it('should dispatch FetchBrowsePageSongsSuccess when api call is success', () => {
    const _generator = FetchBrowsePageSongs({ start, page })
    expect(_generator.next().value).toEqual(call(getBrowsePageSongs, start, page))
    expect(_generator.next(_api_result).value).toEqual(
      put(FetchBrowsePageSongsSuccess(start, page, _api_result.total_pages, _api_result.songs))
    )
    expect(_generator.next().done).toBe(true)
  })

  it('should dispatch FetchBrowsePageSongsError when api call is error', () => {
    const error = new Error('API ERROR')
    const _generator = FetchBrowsePageSongs({ start, page })
    expect(_generator.next().value).toEqual(call(getBrowsePageSongs, start, page))
    expect(_generator.throw(error).value).toEqual(put(FetchBrowsePageSongsError()))
    expect(_generator.next().done).toBe(true)
  })
})
