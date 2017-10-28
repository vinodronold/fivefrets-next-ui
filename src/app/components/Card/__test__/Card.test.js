import React from 'react'
import renderer from 'react-test-renderer'
import Left from '../Left'
import Content from '../Content'
import Card from '../Card'
describe('components/Card.js', () => {
  it('should match the Left spanshot', () => {
    const _left = renderer.create(<Left id={'test_id'} height={'14rem'} />)
    expect(_left).toMatchSnapshot()
  })

  it('should match the Content spanshot', () => {
    const _content = renderer.create(<Content>Content</Content>)
    expect(_content).toMatchSnapshot()
  })

  it('should match the Card spanshot with default height', () => {
    const _card = renderer.create(<Card id={'test_id'} title={'title'} subtitle={'subtitle'} onClick={jest.fn()} />)
    expect(_card).toMatchSnapshot()
  })

  it('should match the Card spanshot with defined height', () => {
    const _card = renderer.create(
      <Card id={'test_id'} title={'title'} subtitle={'subtitle'} height={'20rem'} onClick={jest.fn()} />
    )
    expect(_card).toMatchSnapshot()
  })
})
