import { connect } from 'react-redux'
import { ToggleMenu } from '../actions'
import MenuList from '../components/MenuList'
const mapStateToProps = state => ({
  ...state.ui
})
const mapDispatchToProps = dispatch => ({
  ToggleMenu: () => {
    dispatch(ToggleMenu())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)
