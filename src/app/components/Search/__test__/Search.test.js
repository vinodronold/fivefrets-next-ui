import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from '../Search'
import DisplayResult, { handleRouteChangeComplete } from '../DisplayResult'
import Card from '../../Card'

jest.mock('next/router')

describe('components/Search', () => {
  describe('Search', () => {
    it('should match Search Snapshot when not open', () => {
      const _search = renderer.create(
        <Search
          isSearchOpen={false}
          IsError={false}
          result={[]}
          input={''}
          ToggleSearch={jest.fn()}
          CaptureSearchInput={jest.fn()}
        />
      )
      expect(_search).toMatchSnapshot()
    })
    it('should match Search Snapshot when open', () => {
      const _search = renderer.create(
        <Search
          isSearchOpen={true}
          IsError={false}
          result={[]}
          input={''}
          ToggleSearch={jest.fn()}
          CaptureSearchInput={jest.fn()}
        />
      )
      expect(_search).toMatchSnapshot()
    })
    it('should match Search Snapshot when Error', () => {
      const _search = renderer.create(
        <Search
          isSearchOpen={true}
          IsError={true}
          result={[]}
          input={''}
          ToggleSearch={jest.fn()}
          CaptureSearchInput={jest.fn()}
        />
      )
      expect(_search).toMatchSnapshot()
    })
    it('should match Search Snapshot when Display Results', () => {
      const _search = renderer.create(
        <Search
          isSearchOpen={true}
          IsError={true}
          result={[
            { id: 1, title: 'title 1'},
            { id: 2, title: 'title 2'}
          ]}
          input={'abc'}
          ToggleSearch={jest.fn()}
          CaptureSearchInput={jest.fn()}
        />
      )
      expect(_search).toMatchSnapshot()
    })
  })

  describe('DisplayResult', () => {
    it('should match DisplayResult snapshot', () => {
      const _display_result = renderer.create(<DisplayResult ToggleSearch={jest.fn} />)
      expect(_display_result).toMatchSnapshot()
    })
    it('should match DisplayResult snapshot with results', () => {
      const _display_result = renderer.create(
        <DisplayResult
          result={[
            { id: 1, title: 'title 1'},
            { id: 2, title: 'title 2'}
          ]}
          ToggleSearch={jest.fn}
        />
      )
      expect(_display_result).toMatchSnapshot()
    })
    it('should match DisplayResult snapshot when Error', () => {
      const _display_result = renderer.create(<DisplayResult IsError={true} ToggleSearch={jest.fn} />)
      expect(_display_result).toMatchSnapshot()
    })
    it('should match snapshot after clicking Card', () => {
      
      const _ToggleSearch = jest.fn()
      const _display_result = shallow(
        <DisplayResult result={[{ id: 1, title: 'title 1'}]} ToggleSearch={_ToggleSearch} />
      )
      _display_result.find(Card).simulate('click')
      expect(_display_result).toMatchSnapshot()
      expect(_ToggleSearch).toBeCalled()
    })
    it('handleRouteChangeComplete should call ToggleSearch', () => {
      const _ToggleSearch = jest.fn()
      handleRouteChangeComplete(_ToggleSearch)
      expect(_ToggleSearch).toBeCalled()
    })
  })

  describe('onChange Functions', () => {
    it('should match the snapshot after onChange', () => {
      const _search = shallow(
        <Search
          isSearchOpen={false}
          IsError={false}
          result={[]}
          input={''}
          ToggleSearch={jest.fn()}
          CaptureSearchInput={jest.fn()}
        />
      )
      _search.find('input').simulate('change', {
        target: {
          value: 'Search Input'
        }
      })
      expect(_search).toMatchSnapshot()
    })
  })
})
