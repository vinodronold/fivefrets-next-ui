import { connect } from 'react-redux'
import { ToggleMenu } from '../actions'
import Hamburger from '../components/Hamburger'

const mapStateToProps = state => ({
  ...state.ui
})
const mapDispatchToProps = dispatch => ({
  ToggleMenu: () => {
    dispatch(ToggleMenu())
  },
  ToggleSearch: () => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
