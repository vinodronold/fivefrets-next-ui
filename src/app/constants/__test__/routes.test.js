import { home, play, browse, login } from '../routes'

describe('constants/routes', () => {
  it('home route should pass', () => {
    expect(home.href()).toBe('/')
    expect(home.as()).toBe('/')
  })
  it('play route should pass', () => {
    const _id = 'test'
    expect(play.href(_id)).toBe(`/play?id=${_id}`)
    expect(play.as(_id)).toBe(`/p/${_id}`)
  })
  it('browse route should pass', () => {
    const _text = 'test'
    expect(browse.href(_text)).toBe(`/browse?text=${_text}`)
    expect(browse.as(_text)).toBe(`/b/${_text}`)
  })
  it('login route should pass', () => {
    expect(login.href()).toBe('/login')
    expect(login.as()).toBe('/l')
  })
})
