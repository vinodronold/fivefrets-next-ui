import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from '../Search'
import DisplayResult from '../DisplayResult'

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
            { id: 1, title: 'title 1', subtitle: 'subtitle 1' },
            { id: 2, title: 'title 2', subtitle: 'subtitle 2' }
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
      const _display_result = renderer.create(<DisplayResult />)
      expect(_display_result).toMatchSnapshot()
    })
    it('should match DisplayResult snapshot with results', () => {
      const _display_result = renderer.create(
        <DisplayResult
          result={[
            { id: 1, title: 'title 1', subtitle: 'subtitle 1' },
            { id: 2, title: 'title 2', subtitle: 'subtitle 2' }
          ]}
        />
      )
      expect(_display_result).toMatchSnapshot()
    })
    it('should match DisplayResult snapshot when Error', () => {
      const _display_result = renderer.create(<DisplayResult IsError={true} />)
      expect(_display_result).toMatchSnapshot()
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