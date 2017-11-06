import { YTImg } from '../utils'

describe('utils', () => {
  it('YTImg should return correct URL', () => {
    expect(YTImg('YT_Identifier')).toBe('https://i.ytimg.com/vi/YT_Identifier/default.jpg')
  })
})
