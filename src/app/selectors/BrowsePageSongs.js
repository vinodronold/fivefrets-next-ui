import { createSelector } from 'reselect'
import { GetBrowse, GetSongs } from './GetState'
import FormatSong from './FormatSong'

const BuildBrowsePageSongs = (browse, songs) =>
  browse.pages[browse.start] && browse.pages[browse.start][browse.curr_page]
    ? browse.pages[browse.start][browse.curr_page].map(s => FormatSong(s, songs[s]))
    : []

const BrowsePageSongs = createSelector(GetBrowse, GetSongs, BuildBrowsePageSongs)
export default BrowsePageSongs

