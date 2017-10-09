import { TOGGLE_MENU } from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.ui, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { isMenuOpen: !state.isMenuOpen })
    //   case TOGGLE_SEARCH:
    //     return Object.assign({}, state, { isSearchOpen: !state.isSearchOpen })
    default:
      return state
  }
}
