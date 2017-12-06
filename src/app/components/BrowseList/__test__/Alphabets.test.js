import React from 'react'
import renderer from 'react-test-renderer'
import Alphabets from '../Alphabets'

jest.mock('next/router')

describe('components/BrowseList/Alphabets', () => {
    it('should match the snapshot', () => {
        const _alphabet = renderer.create(<Alphabets />)
        expect(_alphabet).toMatchSnapshot()
    })
})