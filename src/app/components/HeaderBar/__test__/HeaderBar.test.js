import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Headerbar from '../HeaderBar'

describe('components/HeaderBar.js', () => {
    it('should contain one div, one span and text fivefrets', () => {
        const _HeaderBar = shallow(<Headerbar />)
        expect(_HeaderBar.find('div')).toHaveLength(1)
        expect(_HeaderBar.find('span')).toHaveLength(1)
        expect(_HeaderBar.find('span').text()).toBe('fivefrets')
    })
    
    it('should match Headerbar Snapshot', () => {
        const _HeaderBar = renderer.create(<Headerbar />)
        expect(_HeaderBar).toMatchSnapshot()
      })
})