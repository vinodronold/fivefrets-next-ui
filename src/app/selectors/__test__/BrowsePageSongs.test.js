import BrowsePageSongs from '../BrowsePageSongs'
describe('selectors/BrowsePageSongs', () => {
  it('should format and select the songs', () => {
    const _state = {
      browse: {
        start: 'a',
        curr_page: 1,
        pages: {
          a: {
            1: [1, 2]
          }
        }
      },
      songs: {
        1: { title: 'title 1' },
        2: { title: 'title 2' }
      }
    }
    const _result = [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }]
    expect(BrowsePageSongs(_state)).toEqual(_result)
  })

  it('should return empty array when "start" is not equal', () => {
    const _state = {
      browse: {
        start: 'b',
        curr_page: 1,
        pages: {
          a: {
            1: [1, 2]
          }
        }
      },
      songs: {
        1: { title: 'title 1' },
        2: { title: 'title 2' }
      }
    }
    expect(BrowsePageSongs(_state)).toEqual([])
  })

  it('should return empty array when "curr_page" is not equal', () => {
    const _state = {
      browse: {
        start: 'a',
        curr_page: 2,
        pages: {
          a: {
            1: [1, 2]
          }
        }
      },
      songs: {
        1: { title: 'title 1' },
        2: { title: 'title 2' }
      }
    }
    expect(BrowsePageSongs(_state)).toEqual([])
  })

})
