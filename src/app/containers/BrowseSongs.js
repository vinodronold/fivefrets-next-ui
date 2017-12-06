import { connect } from 'react-redux'
import { BrowsePageSongs } from '../selectors'
import { FetchBrowsePageSongs, MoveToBrowsePage } from '../actions'
import BrowseList from '../components/BrowseList'

const mapStateToProps = state => ({
  isError: state.browse.isError,
  curr_page: state.browse.curr_page,
  total_pages: state.browse.total_pages,
  start: state.browse.start,
  songs: BrowsePageSongs(state)
})

const mapDispatchToProps = dispatch => ({
  FetchBrowsePageSongs: (start, page) => {
    dispatch(FetchBrowsePageSongs(start, page))
  },
  MoveToBrowsePage: page => {
    dispatch(MoveToBrowsePage(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BrowseList)
