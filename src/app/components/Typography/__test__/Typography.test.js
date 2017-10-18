import React from 'react'
import renderer from 'react-test-renderer'
import { GetLetterSpacing, Display1, Caption } from '../Typography'

describe('component/Typography', () => {
  it('GetLetterSpacing should return rem when letter-spacing is number', () => {
    expect(GetLetterSpacing(1)).toBe('1rem')
  })

  it('GetLetterSpacing should return same string when letter-spacing is string', () => {
    let _ls = 'normal'
    expect(GetLetterSpacing(_ls)).toBe(_ls)
  })

  it('Display1 should match Snapshot', () => {
    const _display_1 = renderer.create(<Display1>Display1</Display1>)
    expect(_display_1).toMatchSnapshot()
  })

  it('Caption should match Snapshot', () => {
    const _caption = renderer.create(<Caption>Caption</Caption>)
    expect(_caption).toMatchSnapshot()
  })
})
