import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
import HomeReducer from './HomeReducer'
import SongsReducer from './SongsReducer'
// import PlayerReducer from './PlayerReducer'
// import BrowseReducer from './BrowseReducer'

export default combineReducers({
  ui: UIReducer,
  search: SearchReducer,
  home: HomeReducer,
  songs: SongsReducer
})
