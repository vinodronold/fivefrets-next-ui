import React, { PureComponent } from 'react'
import { bool, arrayOf, object } from 'prop-types'
import Link from 'next/link'
import { play } from '../../constants/routes'
import Card from '../Card'
import Loader from '../Loader'
import Box from '../Box'
import { Caption } from '../Typography'

export default class SongList extends PureComponent {
  static propTypes = {
    isError: bool,
    songs: arrayOf(object)
  }
  componentWillMount() {
    if (!(this.props.songs.length > 0)) {
      this.props.FetchHomePageSongs()
    }
  }
  render() {
    const { isError = false, songs } = this.props
    return isError ? (
      <Box style={{ textAlign: 'center' }}>
        <Caption>Oops.. ERROR.. Sorry.. please try refreshing... </Caption>
      </Box>
    ) : songs && songs.length > 0 ? (
      <div>
        {songs.map(s => (
          <Link prefetch key={s.id} href={play.href(s.id)} as={play.as(s.id)}>
            <Card id={s.id} title={s.title} />
          </Link>
        ))}
      </div>
    ) : (
      <Loader />
    )
  }
}
