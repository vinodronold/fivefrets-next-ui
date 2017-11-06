import { createSelector } from 'reselect'
import { GetHome, GetSongs } from './GetState'

const BuildHomePageSongs = (home, songs) =>
  home.list.map(s => ({ id: s, title: songs[s] ? songs[s].title : 'Loading...' }))

const HomePageSongs = createSelector(GetHome, GetSongs, BuildHomePageSongs)
export default HomePageSongs
