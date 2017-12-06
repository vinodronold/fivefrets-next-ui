import React, { PureComponent } from 'react'
import { bool, arrayOf, object } from 'prop-types'
import SongList from '../SongList'

export default class HomeSongsList extends PureComponent {
  static propTypes = {
    isError: bool,
    songs: arrayOf(object)
  }

  static defaultProps = {
    isError: false,
    songs: []
  }

  componentWillMount() {
    if (!(this.props.songs.length > 0)) {
      this.props.FetchHomePageSongs()
    }
  }
  render() {
    const { isError, songs } = this.props
    return <SongList isError={isError} songs={songs} />
  }
}
