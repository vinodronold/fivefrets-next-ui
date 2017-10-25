import React from 'react'
import renderer from 'react-test-renderer'
import ContentWrapper from '../ContentWrapper'

describe('components/ContentWrapper', () => {
  it('should match menu is open', () => {
    const _content_open = renderer.create(<ContentWrapper isMenuOpen={true} />)
    expect(_content_open).toMatchSnapshot()
  })
  it('should match menu is closed', () => {
    const _content_closed = renderer.create(<ContentWrapper isMenuOpen={false} />)
    expect(_content_closed).toMatchSnapshot()
  })
})
