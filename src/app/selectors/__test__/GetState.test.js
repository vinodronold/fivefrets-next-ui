import { GetHome, GetBrowse, GetSongs } from '../GetState'

describe('Get State', () => {
  const _state = {
    browse: {
      test: 'browse ok'
    },
    home: {
      test: 'home ok'
    },
    songs: {
      test: 'songs ok'
    }
  }
  it('GetHome should return home state', () => {
    expect(GetHome(_state)).toEqual(_state.home)
  })
  it('GetSongs should return browse state', () => {
    expect(GetBrowse(_state)).toEqual(_state.browse)
  })
  it('GetSongs should return songs state', () => {
    expect(GetSongs(_state)).toEqual(_state.songs)
  })
})
