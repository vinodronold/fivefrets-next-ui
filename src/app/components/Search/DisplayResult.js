import React, { PureComponent } from 'react'
import { shape, string, bool } from 'prop-types'
import Loader from '../Loader'
import Card from '../Card'
import { Caption } from '../Typography'

export default class DisplayResult extends PureComponent {
  static propTypes = {
    result: shape({
      id: string.isRequired,
      title: string.isRequired,
      subtitle: string
    }),
    IsError: bool
  }

  render() {
    const { result = [], IsError = false } = this.props
    return IsError ? (
      <Caption style={{ textAlign: 'center' }}>Oops.. Error.. Search did not complete.. Sorry..</Caption>
    ) : result.length > 0 ? (
      <div>
        {result.map(r => <Card key={r.id} {...r} height="45rem" />)}
        <style jsx>{`
          div {
            padding: 1rem;
            display: block;
          }
        `}</style>
      </div>
    ) : (
      <Loader />
    )
  }
}
