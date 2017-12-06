import getBrowsePageSongs from '../getBrowsePageSongs'

describe('getBrowsePageSongs -> SHOULD BE REWRITTEN', () => {
  it('should match the dummy output', () => {
    expect(getBrowsePageSongs('a', 1)).toEqual({
      songs: {
        'a-PAGE-1-1': { title: 'a-PAGE-1-1' },
        'a-PAGE-1-2': { title: 'a-PAGE-1-2' },
        'a-PAGE-1-3': { title: 'a-PAGE-1-3' },
        'a-PAGE-1-4': { title: 'a-PAGE-1-4' },
        'a-PAGE-1-5': { title: 'a-PAGE-1-5' }
      },
      total_pages: 5
    })
  })
})
