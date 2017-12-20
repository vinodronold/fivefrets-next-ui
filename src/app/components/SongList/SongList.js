import React, { PureComponent } from 'react'
import { bool, arrayOf, object } from 'prop-types'
import Link from 'next/link'
import { play } from '../../constants/routes'
import Card from '../Card'
import Loader from '../Loader'
import { ErrorBox } from '../Box'
import { Caption } from '../Typography'

export default class SongList extends PureComponent {
  static propTypes = {
    isError: bool,
    songs: arrayOf(object)
  }

  render() {
    const { isError = false, songs } = this.props
    return isError ? (
      <ErrorBox>
        <Caption>Oops.. ERROR.. Sorry.. please try refreshing... </Caption>
      </ErrorBox>
    ) : songs && songs.length > 0 ? (
      songs.map(s => (
        <Link prefetch key={s.id} href={play.href(s.id)} as={play.as(s.id)}>
          <Card id={s.id} title={s.title} />
        </Link>
      ))
    ) : (
      <Loader />
    )
  }
}
