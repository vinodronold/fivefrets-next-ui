import HomeReducer from '../HomeReducer'
import InitialState from '../InitialState'
import { FetchHomePageSongs, FetchHomePageSongsSuccess, FetchHomePageSongsError, NoAction } from '../../actions'

describe('Home Reducer', () => {
  const _songs = {
    1: { title: 'title 1' },
    2: { title: 'title 2' }
  }
  it('should initialize home page state', () => {
    expect(HomeReducer({}, FetchHomePageSongs())).toEqual(InitialState.home)
  })

  it('should populate song on success', () => {
    const _next_state = {
      isError: false,
      list: Object.keys(_songs)
    }
    expect(HomeReducer({}, FetchHomePageSongsSuccess(_songs))).toEqual(_next_state)
  })

  it('should set IsError on Error', () => {
    const _next_state = {
      isError: true,
      list: []
    }
    expect(HomeReducer({}, FetchHomePageSongsError())).toEqual(_next_state)
  })

  it('Initial State should match the InitialState.home', () => {
    expect(HomeReducer(undefined, NoAction())).toEqual(InitialState.home)
  })
})
