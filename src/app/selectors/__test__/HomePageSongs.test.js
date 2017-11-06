import HomePageSongs from '../HomePageSongs'

describe('selector/HomePageSongs', () => {
  it('should format and select the songs', () => {
    const _state = {
      home: {
        isError: false,
        list: ['a', 'b']
      },
      songs: {
        a: {
          title: 'title a'
        },
        b: {
          title: 'title b'
        }
      }
    }
    const _result = [{ id: 'a', title: 'title a' }, { id: 'b', title: 'title b' }]
    expect(HomePageSongs(_state)).toEqual(_result)
  })

  it('should format and select songs title as Loading, when songs object is empty', () => {
    const _state = {
      home: {
        isError: false,
        list: ['a', 'b']
      },
      songs: {
        c: {
          title: 'title c'
        },
        d: {
          title: 'title d'
        }
      }
    }
    const _result = [{ id: 'a', title: 'Loading...' }, { id: 'b', title: 'Loading...' }]
    expect(HomePageSongs(_state)).toEqual(_result)
  })
})
