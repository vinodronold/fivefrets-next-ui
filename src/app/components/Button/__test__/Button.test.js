import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button'

describe('components/Button.js', () => {
  it('should match primary snapshot', () => {
    const _primary_button = renderer.create(<Button>Button</Button>)
    expect(_primary_button).toMatchSnapshot()
  })
  it('should match disabled snapshot', () => {
    const _disabled_button = renderer.create(<Button disabled>Button Disabled</Button>)
    expect(_disabled_button).toMatchSnapshot()
  })
})
