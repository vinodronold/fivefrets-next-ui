import React from 'react'
import renderer from 'react-test-renderer'
import Box from '../Box'

describe('Box', () => {
  it('should match the snapshot', () => {
    const _box = renderer.create(<Box>BOX</Box>)
    expect(_box).toMatchSnapshot()
  })
})
