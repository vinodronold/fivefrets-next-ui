import { connect } from 'react-redux'
import { ToggleMenu, ToggleSearch } from '../actions'
import Hamburger from '../components/Hamburger'

const mapStateToProps = state => ({
  ...state.ui
})
const mapDispatchToProps = dispatch => ({
  ToggleMenu: () => {
    dispatch(ToggleMenu())
  },
  ToggleSearch: () => {
    dispatch(ToggleSearch())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
