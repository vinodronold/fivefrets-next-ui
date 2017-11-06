import getHomePageSongs from '../getHomePageSongs'

describe('getHomePageSongs -> SHOULD BE REWRITTEN', () => {
  const _result = {
    PiL5UTTTrxk: {
      title: 'Thalli Pogathey'
    },
    Ok9mfO_MeRU: {
      title: 'Munbe Vaa song - Sillunu Oru Kaadhal'
    }
  }
  it('should match the output', () => {
    expect(getHomePageSongs()).toEqual(_result)
  })
})
