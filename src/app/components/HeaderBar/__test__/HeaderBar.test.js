/* eslint-env jest */
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Headerbar from '../HeaderBar'

describe('Header Bar', () => {
    it('should contain one div', () => {
        const _HeaderBar = shallow(<Headerbar />)
        expect(_HeaderBar.find('div')).toHaveLength(1)
    })
})

describe('Header Bar Snapshot', () => {
    it('should shows "Header"', () => {
      const _HeaderBar = renderer.create(<Headerbar />)
      expect(_HeaderBar).toMatchSnapshot()
    })
  })