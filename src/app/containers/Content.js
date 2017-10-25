import { connect } from 'react-redux'
import ContentWrapper from '../components/ContentWrapper'
const mapStateToProps = state => ({
  ...state.ui
})

export default connect(mapStateToProps)(ContentWrapper)