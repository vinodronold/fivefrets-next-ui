import * as theme from '../theme'

describe('theme', () => {
  it('mobile should be 768', () => {
    expect(theme.mobile).toBe(768)
  })
  
  it('tablet should be 992', () => {
    expect(theme.tablet).toBe(992)
  })
})
