import React from 'react'
import renderer from 'react-test-renderer'
import MenuList, { onMenuClickHandler, onRouteChangeCompleteHandler } from '../MenuList'

jest.mock('next/router')

describe('components/MenuList', () => {
  it('should match snapshot when Menu is closed', () => {
    const _closed_menu_list = renderer.create(<MenuList isMenuOpen={false} ToggleMenu={jest.fn()} />)
    expect(_closed_menu_list).toMatchSnapshot()
  })
  it('should match snapshot when Menu is open', () => {
    const _open_menu_list = renderer.create(<MenuList isMenuOpen={true} ToggleMenu={jest.fn()} />)
    expect(_open_menu_list).toMatchSnapshot()
  })

  it('routes and ToggleMenu should be called in onMenuClickHandler', () => {
    const _ToggleMenu = jest.fn()
    const _test_route = {
      href: jest.fn(),
      as: jest.fn()
    }
    onMenuClickHandler(_ToggleMenu, _test_route)()
    expect(_test_route.href).toBeCalled()
    expect(_test_route.as).toBeCalled()
    onRouteChangeCompleteHandler(_ToggleMenu)()
    expect(_ToggleMenu).toBeCalled()
  })
})
