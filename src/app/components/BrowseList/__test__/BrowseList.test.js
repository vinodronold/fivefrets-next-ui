import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import BrowseList from '../BrowseList'

jest.mock('next/router')

describe('components/BrowseList', () => {
  it('should match snapshot', () => {
    const _browse_list = renderer.create(<BrowseList FetchBrowsePageSongs={jest.fn()} />)
    expect(_browse_list).toMatchSnapshot()
  })

  it('componentWillReceiveProps - for page number change', () => {
    const _spy_componentWillReceiveProps = spy(BrowseList.prototype, 'componentWillReceiveProps')
    const _browse_list = mount(<BrowseList FetchBrowsePageSongs={jest.fn()} />)
    expect(_spy_componentWillReceiveProps.calledOnce).toEqual(false)
    _browse_list.setProps({ curr_page: 2 })
    expect(_spy_componentWillReceiveProps.calledOnce).toEqual(true)
    _spy_componentWillReceiveProps.restore()
  })

  it('componentWillReceiveProps - browse start change', () => {
    const _spy_componentWillReceiveProps = spy(BrowseList.prototype, 'componentWillReceiveProps')
    const _browse_list = mount(<BrowseList FetchBrowsePageSongs={jest.fn()} />)
    expect(_spy_componentWillReceiveProps.calledOnce).toEqual(false)
    _browse_list.setProps({ url: { start: '*' } })
    expect(_spy_componentWillReceiveProps.calledOnce).toEqual(true)
    _spy_componentWillReceiveProps.restore()
  })

  it('handleSongsFetch should be called when mounting and page change', () => {
    const _spy_handleSongsFetch = spy(BrowseList.prototype, 'handleSongsFetch')
    const _browse_list = mount(<BrowseList FetchBrowsePageSongs={jest.fn()} />)
    expect(_spy_handleSongsFetch.calledOnce).toEqual(true)
    _browse_list.setProps({ curr_page: 2 })
    expect(_spy_handleSongsFetch.calledTwice).toEqual(true)
    expect(_spy_handleSongsFetch.callCount).toEqual(2)
    _spy_handleSongsFetch.restore()
  })

  it('FetchBrowsePageSongs should be called when Songs not availble', () => {
    const _spy_FetchBrowsePageSongs = spy()
    mount(<BrowseList FetchBrowsePageSongs={_spy_FetchBrowsePageSongs} />)
    expect(_spy_FetchBrowsePageSongs.called).toEqual(true)
  })

  it('FetchBrowsePageSongs should not be called when Songs availble', () => {
    const _spy_FetchBrowsePageSongs = spy()
    mount(<BrowseList FetchBrowsePageSongs={_spy_FetchBrowsePageSongs} songs={[{ songs: 'test' }]} />)
    expect(_spy_FetchBrowsePageSongs.notCalled).toEqual(true)
  })
})
