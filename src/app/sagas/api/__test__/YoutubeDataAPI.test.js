import axios from 'axios'
import { baseParams, baseURL, getSearchResult } from '../YoutubeDataAPI'
import MockAdapter from 'axios-mock-adapter'

describe('YoutubeDataAPI', () => {
  const _text = 'test'
  const _videoId = 'videoId'
  const _title = 'title'
  const _expected_response = [{ id: _videoId, title: _title }]

  const _mock = new MockAdapter(axios)
  _mock
    .onGet(`${baseURL}/search`, {
      params: {
        ...baseParams,
        q: _text
      }
    })
    .reply(200, {
      items: [{ id: { videoId: _videoId }, snippet: { title: _title } }]
    })

  it('should return data', async () => {
    let _response = await getSearchResult(_text)
    expect(_response).toEqual(_expected_response)
  })
})
