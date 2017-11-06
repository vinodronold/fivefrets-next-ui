import { ToggleMenu } from './Menu'
import { ToggleSearch, CaptureSearchInput, FetchSearchResultSuccess, FetchSearchResultError } from './Search'
import { FetchHomePageSongs, FetchHomePageSongsSuccess, FetchHomePageSongsError } from './HomePage'

export {
  ToggleMenu,
  ToggleSearch,
  CaptureSearchInput,
  FetchSearchResultSuccess,
  FetchSearchResultError,
  FetchHomePageSongs,
  FetchHomePageSongsSuccess,
  FetchHomePageSongsError
}

export const NoAction = () => ({
  type: 'NO_ACTION_BLAH_BLAH'
})