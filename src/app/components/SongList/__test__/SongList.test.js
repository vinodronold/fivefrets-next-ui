import React from 'react'
import renderer from 'react-test-renderer'
import SongList from '../SongList'

jest.mock('next/router')

describe('components/SongList', () => {
  const _songs = [
    {
      1: { title: 'title 1' },
      2: { title: 'title 2' }
    }
  ]
  it('should match snapshot when song is Empty', () => {
    const _song_list = renderer.create(<SongList songs = {[]} FetchHomePageSongs={jest.fn()} />)
    expect(_song_list).toMatchSnapshot()
  })
  it('should match snapshot with songs', () => {
    const _song_list = renderer.create(<SongList songs={_songs} />)
    expect(_song_list).toMatchSnapshot()
  })
  it('should match snapshot with error', () => {
    const _song_list = renderer.create(<SongList isError={true} songs={_songs} />)
    expect(_song_list).toMatchSnapshot()
  })
})
