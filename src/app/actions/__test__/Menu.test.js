import { ToggleMenu } from '../Menu'
import { TOGGLE_MENU } from '../../constants/ActionTypes'

describe('Menu Actions', () => {
  it('toggle menu action should return Type TOGGLE_MENU', () => {
    const _toggle_menu_action = {
      type: TOGGLE_MENU
    }
    expect(ToggleMenu()).toEqual(_toggle_menu_action)
  })
})
