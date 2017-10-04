import * as theme from '../theme'

describe('theme', () => {
  it('mobile should be 768', () => {
    expect(theme.mobile).toBe(768)
  })

  it('tablet should be 992', () => {
    expect(theme.tablet).toBe(992)
  })

  it('Base font should be 16px', () => {
    expect(theme.baseFont).toBe('16px')
  })

  it('Font Family should be Helvetica, Arial, sans-serif', () => {
    expect(theme.baseFont).toBe('Helvetica, Arial, sans-serif')
  })

  it('Primary Color should be rgba(255,255,255,1)', () => {
    expect(theme.color.primary()).toBe('rgba(255,255,255,1)')
  })

  it('Primary Color opacity should be updated', () => {
    expect(theme.color.primary(0.5)).toBe('rgba(255,255,255,0.5)')
  })

  it('Secondary Color should be rgba(251,192,45,0.5)', () => {
    expect(theme.color.secondary()).toBe('rgba(251,192,45,0.5)')
  })

  it('Secondary Color opacity should be updated', () => {
    expect(theme.color.secondary(1)).toBe('rgba(251,192,45,1)')
  })

  it('Background Color should be rgba(0,0,0,0.8)', () => {
    expect(theme.color.bg()).toBe('rgba(0,0,0,0.8)')
  })

  it('Background Color opacity should be updated', () => {
    expect(theme.color.bg(1)).toBe('rgba(0,0,0,1)')
  })
})
