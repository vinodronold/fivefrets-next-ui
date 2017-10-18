import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Loader from '../Loader'

describe('components/Loader.js', () => {
  let _loader = shallow(<Loader />)
  it('should contain one container class', () => {
    expect(_loader.find('.container')).toHaveLength(1)
  })
  it('should contain one loader class', () => {
    expect(_loader.find('.loader')).toHaveLength(1)
  })
  // it('should contain five bar class', () => {
  //   expect(_loader.find('.bar')).toHaveLength(5)
  // })
  // it('should contain one d1 d2 d3 d4 class', () => {
  //   expect(_loader.find('.d1')).toHaveLength(1)
  //   expect(_loader.find('.d2')).toHaveLength(1)
  //   expect(_loader.find('.d3')).toHaveLength(1)
  //   expect(_loader.find('.d4')).toHaveLength(1)
  // })
  it('should matah the snapshot', () => {
    let _loader = renderer.create(<Loader />)
    expect(_loader).toMatchSnapshot()
  })
})
