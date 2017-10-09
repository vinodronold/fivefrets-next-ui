import React from 'react'
import renderer from 'react-test-renderer'
import MenuList from '../MenuList'

describe('components/MenuList', () => {
  it('should match snapshot when Menu is closed', () => {
    const _closed_menu_list = renderer.create(<MenuList isMenuOpen={false} ToggleMenu={jest.fn()} />)
    expect(_closed_menu_list).toMatchSnapshot()
  })
  it('should match snapshot when Menu is open', () => {
    const _open_menu_list = renderer.create(<MenuList isMenuOpen={true} ToggleMenu={jest.fn()} />)
    expect(_open_menu_list).toMatchSnapshot()
  })
})
