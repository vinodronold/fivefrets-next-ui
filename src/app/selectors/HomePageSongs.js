import { createSelector } from 'reselect'
import { GetHome, GetSongs } from './GetState'
import FormatSong from './FormatSong'

const BuildHomePageSongs = (home, songs) => home.list.map(s => FormatSong(s, songs[s]))
const HomePageSongs = createSelector(GetHome, GetSongs, BuildHomePageSongs)
export default HomePageSongs
