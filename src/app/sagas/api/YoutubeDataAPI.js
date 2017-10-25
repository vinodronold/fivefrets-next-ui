import axios from 'axios'

const YoutubeDataAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: '5',
    type: 'video',
    videoCategoryId: '10',
    fields: 'items(id,snippet/title)',
    key: 'AIzaSyDt03O45GRK2doERZICfzCgUbeXVFtLpiY'
  }
})

export const getSearchResult = async text => {
  const res = await YoutubeDataAPI.get(`/search`, {
    params: {
      q: text
    }
  })
  return await res.data.items.map(i => ({ id: i.id.videoId, title: i.snippet.title }))
}
