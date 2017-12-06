import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import HomeSongsList from '../HomeSongsList'

jest.mock('next/router')

describe('components/HomeSongsList', () => {
  it('should match snapshot', () => {
    const _home_songs_list = renderer.create(<HomeSongsList FetchHomePageSongs={jest.fn()} />)
    expect(_home_songs_list).toMatchSnapshot()
  })

  it('FetchHomePageSongs should be called when Songs not availble', () => {
    const _spy_FetchHomePageSongs = spy()
    mount(<HomeSongsList FetchHomePageSongs={_spy_FetchHomePageSongs} />)
    expect(_spy_FetchHomePageSongs.called).toEqual(true)
  })

  it('FetchHomePageSongs should not be called when Songs availble', () => {
    const _spy_FetchHomePageSongs = spy()
    mount(<HomeSongsList FetchHomePageSongs={_spy_FetchHomePageSongs} songs={[{ songs: 'test' }]} />)
    expect(_spy_FetchHomePageSongs.notCalled).toEqual(true)
  })
})
