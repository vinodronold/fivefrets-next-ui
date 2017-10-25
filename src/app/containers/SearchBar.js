import { connect } from 'react-redux'
import { ToggleSearch, CaptureSearchInput } from '../actions'
import Search from '../components/Search'

const mapStateToProps = state => ({
  ...state.ui,
  ...state.search
})
const mapDispatchToProps = dispatch => ({
  ToggleSearch: () => {
    dispatch(ToggleSearch())
  },
  CaptureSearchInput: input => {
    dispatch(CaptureSearchInput(input))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
