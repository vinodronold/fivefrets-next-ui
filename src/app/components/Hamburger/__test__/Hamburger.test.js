import React from 'react'
import renderer from 'react-test-renderer'

import Hamburger, { Layer, Arm } from '../Hamburger'

describe('components/Hamburger.js', () => {

  it('should match Hamburger Snapshot when close', () => {
    const _Hamburger = renderer.create(<Hamburger ToggleMenu={jest.fn()} ToggleSearch={jest.fn()} />)
    expect(_Hamburger).toMatchSnapshot()
  })
  it('should match Hamburger Snapshot when Menu is Open', () => {
    const _Hamburger = renderer.create(
      <Hamburger isMenuOpen={true} ToggleMenu={jest.fn()} ToggleSearch={jest.fn()} />
    )
    expect(_Hamburger).toMatchSnapshot()
  })
  it('should match Hamburger Snapshot when Search is Open', () => {
    const _Hamburger = renderer.create(
      <Hamburger isSearchOpen={true} ToggleMenu={jest.fn()} ToggleSearch={jest.fn()} />
    )
    expect(_Hamburger).toMatchSnapshot()
  })
  it('should match Layer Snapshot when Closed', () => {
    const _Layer = renderer.create(<Layer n={0} />)
    expect(_Layer).toMatchSnapshot()
  })
  it('should match Layer Snapshot when Open', () => {
    const _Layer = renderer.create(<Layer n={0} isOpen={true} />)
    expect(_Layer).toMatchSnapshot()
  })
  it('should match Arm Snapshot when Closed', () => {
    const _Arm = renderer.create(<Arm n={0} />)
    expect(_Arm).toMatchSnapshot()
  })
  it('should match Arm Snapshot when Open', () => {
    const _Arm = renderer.create(<Arm n={0} isOpen={true} />)
    expect(_Arm).toMatchSnapshot()
  })
})
