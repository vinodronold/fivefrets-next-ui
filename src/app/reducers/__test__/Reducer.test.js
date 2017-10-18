import UIReducer from '../UIReducer'
import InitialState from '../InitialState'
import { ToggleMenu } from '../../actions'

const NoAction = () => ({
  type: 'NO_ACTION_BLAH_BLAH'
})

describe('Reducers', () => {
  describe('UI Reducer', () => {
    it('should Toggle Menu', () => {
      const _current_state = {
        isMenuOpen: false
      }
      const _next_state = {
        isMenuOpen: true
      }
      expect(UIReducer(_current_state, ToggleMenu())).toEqual(_next_state)
    })
    it('should return same state when the action type is not matched', () => {
      const _state = {
        test: true
      }
      expect(UIReducer(_state, NoAction())).toEqual(_state)
    })
    it('Initial State should match the InitialState.ui', () => {
        expect(UIReducer(undefined, NoAction())).toEqual(InitialState.ui)
    })
  })
})