import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Paginate from '../Paginate'
import Button from '../../Button'

describe('components/BrowseList/Paginate', () => {
  it('should match the snapshot', () => {
    const _paginate = renderer.create(<Paginate curr_page={1} total_pages={10} MoveToBrowsePage={jest.fn()} />)
    expect(_paginate).toMatchSnapshot()
  })

  it('should go to Page 1 when Prev is clicked', () => {
    const _paginate = shallow(<Paginate curr_page={2} total_pages={10} MoveToBrowsePage={jest.fn()} />)
    _paginate.find(Button).at(0).simulate('click')
    expect(_paginate).toMatchSnapshot()
  })

  it('should go to Page 2 when Next is clicked', () => {
    const _paginate = shallow(<Paginate curr_page={2} total_pages={10} MoveToBrowsePage={jest.fn()} />)
    _paginate.find(Button).at(2).simulate('click')
    expect(_paginate).toMatchSnapshot()
  })

  it('should go to Page 1 when Page Number is clicked', () => {
    const _paginate = shallow(<Paginate curr_page={2} total_pages={10} MoveToBrowsePage={jest.fn()} />)
    _paginate.find(Button).at(1).simulate('click')
    expect(_paginate).toMatchSnapshot()
  })
})
