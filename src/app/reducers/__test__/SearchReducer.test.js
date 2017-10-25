import SearchReducer from '../SearchReducer'
import InitialState from '../InitialState'
import { CaptureSearchInput, ToggleSearch, FetchSearchResultSuccess, FetchSearchResultError } from '../../actions'

const NoAction = () => ({
  type: 'NO_ACTION_BLAH_BLAH'
})

describe('Search Reducer', () => {
  it('should Capture Search Input', () => {
    const input = 'input'
    const _current_state = {
      input: ''
    }
    const _next_state = {
      input
    }
    expect(SearchReducer(_current_state, CaptureSearchInput(input))).toEqual(_next_state)
  })

  it('Toggle Search should initialize the state', () => {
    const _current_state = {
      input: 'test',
      IsError: false,
      result: [1, 2, 3]
    }
    expect(SearchReducer(_current_state, ToggleSearch())).toEqual(InitialState.search)
  })

  it('Fetch Search Result Success should set the Result', () => {
    const result = [
      { id: 1, title: 'title 1', subtitle: 'subtitle 1' },
      { id: 2, title: 'title 2', subtitle: 'subtitle 2' }
    ]
    const _current_state = {
      IsError: true,
      result: []
    }
    const _next_state = {
      IsError: false,
      result
    }
    expect(SearchReducer(_current_state, FetchSearchResultSuccess(result))).toEqual(_next_state)
  })

  it('Fetch Search Result Error should set the IsError flag', () => {
    const result = [
      { id: 1, title: 'title 1', subtitle: 'subtitle 1' },
      { id: 2, title: 'title 2', subtitle: 'subtitle 2' }
    ]
    const _current_state = {
      IsError: false,
      result
    }
    const _next_state = {
      IsError: true,
      result: []
    }
    expect(SearchReducer(_current_state, FetchSearchResultError(result))).toEqual(_next_state)
  })

  it('should return same state when the action type is not matched', () => {
    const _state = {
      test: true
    }
    expect(SearchReducer(_state, NoAction())).toEqual(_state)
  })

  it('Initial State should match the InitialState.ui', () => {
    expect(SearchReducer(undefined, NoAction())).toEqual(InitialState.search)
  })
})
