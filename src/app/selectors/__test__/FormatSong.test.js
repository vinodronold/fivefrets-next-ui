import FormatSong from '../FormatSong'

describe('selector/FormatSong', () => {
  it('should return formatted song', () => {
    expect(FormatSong(1, { title: 'title' })).toEqual({ id: 1, title: 'title' })
  })
  it('should return Loading when song is undefined', () => {
    expect(FormatSong(1, undefined)).toEqual({ id: 1, title: 'Loading...' })
  })
})
