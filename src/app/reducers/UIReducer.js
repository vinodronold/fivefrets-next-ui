import { TOGGLE_MENU, TOGGLE_SEARCH } from '../constants/ActionTypes'
import InitialState from './InitialState'

export default (state = InitialState.ui, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { isMenuOpen: !state.isMenuOpen })
    case TOGGLE_SEARCH:
      return Object.assign({}, state, { isSearchOpen: !state.isSearchOpen })
    default:
      return state
  }
}
