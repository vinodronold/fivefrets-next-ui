import axios from 'axios'

export const baseParams = {
  part: 'snippet',
  maxResults: '5',
  type: 'video',
  videoCategoryId: '10',
  fields: 'items(id,snippet/title)',
  key: 'AIzaSyDt03O45GRK2doERZICfzCgUbeXVFtLpiY'
}
export const baseURL = 'https://www.googleapis.com/youtube/v3'

export const getSearchResult = async (text) => {
  const res = await axios.get(`${baseURL}/search`, {
    params: {
      ...baseParams,
      q: text
    }
  })
  return await res.data.items.map(i => ({ id: i.id.videoId, title: i.snippet.title }))
}
