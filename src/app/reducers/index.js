import { combineReducers } from 'redux'
import UIReducer from './UIReducer'
import SearchReducer from './SearchReducer'
// import PlayerReducer from './PlayerReducer'
// import BrowseReducer from './BrowseReducer'
// import SongsReducer from './SongsReducer'

export default combineReducers({
  ui: UIReducer,
  search: SearchReducer
})
