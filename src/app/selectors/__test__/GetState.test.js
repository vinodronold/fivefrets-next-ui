import { GetHome, GetSongs } from '../GetState'

describe('Get State', () => {
  const _state = {
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
  it('GetSongs should return songs state', () => {
    expect(GetSongs(_state)).toEqual(_state.songs)
  })
})
