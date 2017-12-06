import SongsReducer from '../SongsReducer'
import InitialState from '../InitialState'
import { FetchHomePageSongsSuccess, NoAction, FetchBrowsePageSongsSuccess } from '../../actions'

describe('Songs Reducer', () => {
  const _songs = {
    1: { title: 'title 1' },
    2: { title: 'title 2' }
  }

  it('should set the songs on FetchHomePageSongsSuccess', () => {
    const _next_state = {
      ..._songs
    }
    expect(SongsReducer({}, FetchHomePageSongsSuccess(_songs))).toEqual(_next_state)
  })

  it('should set the songs on FetchBrowsePageSongsSuccess', () => {
    const _next_state = {
      ..._songs
    }
    expect(SongsReducer({}, FetchBrowsePageSongsSuccess('a', 1, 10, _songs))).toEqual(_next_state)
  })

  it('should updated only fetched fields if already exists in state', () => {
    const _current_state = {
      1: {
        title: 'No Title',
        chords: {
          1: 'test'
        }
      },
      2: {
        title: 'No Title',
        chords: {
          1: 'test'
        }
      }
    }
    const _next_state = {
      1: {
        title: 'title 1',
        chords: {
          1: 'test'
        }
      },
      2: {
        title: 'title 2',
        chords: {
          1: 'test'
        }
      }
    }
    expect(SongsReducer(_current_state, FetchHomePageSongsSuccess(_songs))).toEqual(_next_state)
  })

  it('Initial State should match the InitialState.songs', () => {
    expect(SongsReducer(undefined, NoAction())).toEqual(InitialState.songs)
  })
})
