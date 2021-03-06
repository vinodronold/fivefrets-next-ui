import { ToggleMenu } from './Menu'
import { ToggleSearch, CaptureSearchInput, FetchSearchResultSuccess, FetchSearchResultError } from './Search'
import { FetchHomePageSongs, FetchHomePageSongsSuccess, FetchHomePageSongsError } from './HomePage'
import {
  FetchBrowsePageSongs,
  FetchBrowsePageSongsSuccess,
  FetchBrowsePageSongsError,
  MoveToBrowsePage
} from './BrowsePage'

export {
  ToggleMenu,
  ToggleSearch,
  CaptureSearchInput,
  FetchSearchResultSuccess,
  FetchSearchResultError,
  FetchHomePageSongs,
  FetchHomePageSongsSuccess,
  FetchHomePageSongsError,
  FetchBrowsePageSongs,
  FetchBrowsePageSongsSuccess,
  FetchBrowsePageSongsError,
  MoveToBrowsePage
}

export const NoAction = () => ({
  type: 'NO_ACTION_BLAH_BLAH'
})
