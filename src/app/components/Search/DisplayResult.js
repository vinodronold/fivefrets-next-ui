import React, { PureComponent } from 'react'
import { shape, string, bool, func } from 'prop-types'
import Router from 'next/router'
import Loader from '../Loader'
import Card from '../Card'
import { Caption } from '../Typography'

export const handleRouteChangeComplete = ToggleSearch => {
  ToggleSearch()
  Router.onRouteChangeComplete = null
}

export default class DisplayResult extends PureComponent {
  static propTypes = {
    result: shape({
      id: string.isRequired,
      title: string.isRequired,
      subtitle: string
    }),
    IsError: bool,
    ToggleSearch: func.isRequired
  }

  render() {
    const { result = [], IsError = false, ToggleSearch } = this.props
    return IsError ? (
      <Caption style={{ textAlign: 'center' }}>Oops.. Error.. Search did not complete.. Sorry..</Caption>
    ) : result.length > 0 ? (
      <div>
        {result.map(r => (
          <Card
            key={r.id}
            {...r}
            height="45rem"
            onClick={() => {
              Router.push(`/play?id=${r.id}`, `/p/${r.id}`)
              Router.onRouteChangeComplete = handleRouteChangeComplete(ToggleSearch)
            }}
          />
        ))}
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
