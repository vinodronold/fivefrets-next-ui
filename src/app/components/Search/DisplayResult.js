import React from 'react'
import { arrayOf, shape, string, bool, func } from 'prop-types'
import Router from 'next/router'
import { play } from '../../constants/routes'
import Loader from '../Loader'
import Card from '../Card'
import { Caption } from '../Typography'

const handleRouteChangeComplete = ToggleSearch => () => {
  ToggleSearch()
  Router.onRouteChangeComplete = null
}

const _propTypes = {
  result: arrayOf(
    shape({
      id: string.isRequired,
      title: string.isRequired,
      subtitle: string
    })
  ),
  IsError: bool,
  ToggleSearch: func.isRequired
}

const _defaultProps = {
  result: [],
  IsError: false
}

const DisplayResult = ({ result, IsError, ToggleSearch }) =>
  IsError ? (
    <Caption style={{ textAlign: 'center' }}>Oops.. Error.. Search did not complete.. Sorry..</Caption>
  ) : result.length > 0 ? (
    <div>
      {result.map(r => (
        <Card
          key={r.id}
          {...r}
          height="45rem"
          onClick={() => {
            Router.push(play.href(r.id), play.as(r.id))
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
DisplayResult.propTypes = _propTypes
DisplayResult.defaultProps = _defaultProps

export default DisplayResult
export { handleRouteChangeComplete }
