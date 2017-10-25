import { ToggleSearch, CaptureSearchInput, FetchSearchResultSuccess, FetchSearchResultError } from '../Search'
import {
  TOGGLE_SEARCH,
  CATPURE_SEARCH_INPUT,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_ERROR
} from '../../constants/ActionTypes'

describe('Search Actions', () => {
  it('toggle search action should return Type TOGGLE_SEARCH', () => {
    const _toggle_search_action = {
      type: TOGGLE_SEARCH
    }
    expect(ToggleSearch()).toEqual(_toggle_search_action)
  })

  it('Capture Search Input action should return Type CATPURE_SEARCH_INPUT', () => {
    const _test = 'test'
    const _capture_search_input_action = {
      type: CATPURE_SEARCH_INPUT,
      input: _test
    }
    expect(CaptureSearchInput(_test)).toEqual(_capture_search_input_action)
  })

  it('Fetch Search Result Success action should return Type FETCH_SEARCH_RESULT_SUCCESS', () => {
    const _result = [
      {
        id: 'id1',
        title: 'title1',
        subtitle: 'subtitle1'
      },
      {
        id: 'id2',
        title: 'title2',
        subtitle: 'subtitle2'
      }
    ]
    const _fetch_search_result_success_action = {
      type: FETCH_SEARCH_RESULT_SUCCESS,
      result: _result
    }
    expect(FetchSearchResultSuccess(_result)).toEqual(_fetch_search_result_success_action)
  })

  it('Fetch Search Result Error action should return Type FETCH_SEARCH_RESULT_ERROR', () => {
    const _fetch_search_result_error_action = {
      type: FETCH_SEARCH_RESULT_ERROR
    }
    expect(FetchSearchResultError()).toEqual(_fetch_search_result_error_action)
  })
})
