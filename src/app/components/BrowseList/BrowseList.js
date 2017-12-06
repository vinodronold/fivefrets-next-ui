import React, { PureComponent, Fragment } from 'react'
import { bool, number, func, arrayOf, object } from 'prop-types'
import Alphabets from './Alphabets'
import Paginate from './Paginate'
import SongList from '../SongList'

export default class BrowseList extends PureComponent {
  static propTypes = {
    isError: bool,
    curr_page: number,
    total_pages: number,
    songs: arrayOf(object),
    MoveToBrowsePage: func,
    url: object
  }

  static defaultProps = {
    isError: false,
    curr_page: 1,
    total_pages: 1,
    url: {
      start: 'a'
    },
    songs: []
  }

  handleSongsFetch(start, curr_page, songs) {
    if (songs.length === 0) {
      this.props.FetchBrowsePageSongs(start, curr_page)
    }
  }

  componentWillMount() {
    const { url, curr_page, songs } = this.props
    this.handleSongsFetch(url.start, curr_page, songs)
  }

  componentWillReceiveProps(nextProps) {
    const { url, curr_page, songs } = nextProps
    if (url.start !== this.props.url.start) {
      this.props.FetchBrowsePageSongs(url.start, 1)
    }
    if (curr_page !== this.props.curr_page) {
      this.handleSongsFetch(url.start, curr_page, songs)
    }
  }

  render() {
    const { isError, curr_page, total_pages, songs, MoveToBrowsePage } = this.props
    return (
      <Fragment>
        <Alphabets />
        <SongList isError={isError} songs={songs} />
        <Paginate curr_page={curr_page} total_pages={total_pages} MoveToBrowsePage={MoveToBrowsePage} />
      </Fragment>
    )
  }
}
