import React from 'react'
import renderer from 'react-test-renderer'
import { GetLetterSpacing, Caption, SubHeading1, Title } from '../Typography'

describe('component/Typography', () => {
  it('GetLetterSpacing should return rem when letter-spacing is number', () => {
    expect(GetLetterSpacing(1)).toBe('1rem')
  })

  it('GetLetterSpacing should return same string when letter-spacing is string', () => {
    let _ls = 'normal'
    expect(GetLetterSpacing(_ls)).toBe(_ls)
  })

  it('SubHeading1 should match Snapshot', () => {
    const _SubHeading1 = renderer.create(<SubHeading1>SubHeading1</SubHeading1>)
    expect(_SubHeading1).toMatchSnapshot()
  })

  it('Title should match Snapshot', () => {
    const _Title = renderer.create(<Title>Title</Title>)
    expect(_Title).toMatchSnapshot()
  })

  it('Caption should match Snapshot', () => {
    const _caption = renderer.create(<Caption>Caption</Caption>)
    expect(_caption).toMatchSnapshot()
  })
})
