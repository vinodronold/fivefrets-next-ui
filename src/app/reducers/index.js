import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import HomeReducer from './HomeReducer'
import BrowseReducer from './BrowseReducer'
import SongsReducer from './SongsReducer'
// import PlayerReducer from './PlayerReducer'

export default combineReducers({
  ui: UIReducer,
  search: SearchReducer,
  home: HomeReducer,
  browse: BrowseReducer,
  songs: SongsReducer
})
