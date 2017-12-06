import { connect } from 'react-redux'
import { HomePageSongs } from '../selectors'
import { FetchHomePageSongs } from '../actions'
import HomeSongsList from '../components/HomeSongsList'

const mapStateToProps = state => ({
  isError: state.home.isError,
  songs: HomePageSongs(state)
})

const mapDispatchToProps = dispatch => ({
  FetchHomePageSongs: () => {
    dispatch(FetchHomePageSongs())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeSongsList)
