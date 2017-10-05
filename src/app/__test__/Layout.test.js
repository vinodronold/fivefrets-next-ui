import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../Layout'

describe('Layout.js', () => {
    it('should match Layout Snapshot', () => {
        const _HeaderBar = renderer.create(<Layout />)
        expect(_HeaderBar).toMatchSnapshot()
      })
})