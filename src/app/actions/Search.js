import {
  TOGGLE_SEARCH,
  CATPURE_SEARCH_INPUT,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_ERROR
} from '../constants/ActionTypes'

export const ToggleSearch = () => ({
  type: TOGGLE_SEARCH
})

export const CaptureSearchInput = input => ({
  type: CATPURE_SEARCH_INPUT,
  input
})

export const FetchSearchResultSuccess = result => ({
  type: FETCH_SEARCH_RESULT_SUCCESS,
  result
})

export const FetchSearchResultError = () => ({
  type: FETCH_SEARCH_RESULT_ERROR
})
