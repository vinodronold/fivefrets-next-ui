import React from 'react'
import { number, func } from 'prop-types'
import Button from '../Button'

const _propTypes = {
  curr_page: number,
  total_pages: number,
  MoveToBrowsePage: func.isRequired
}

const _defaultProps = {
  curr_page: 1,
  total_pages: 1
}

/// prop type validation is not happening in test

const Paginate = ({ curr_page, total_pages, MoveToBrowsePage }) => (
  <div>
    <Button
      disabled={curr_page === 1}
      onClick={() => {
        MoveToBrowsePage(curr_page - 1)
      }}>
      &#8606; Prev
    </Button>

    <Button
      onClick={() => {
        MoveToBrowsePage(1)
      }}>{`${curr_page} of ${total_pages}`}</Button>

    <Button
      disabled={curr_page === total_pages}
      onClick={() => {
        MoveToBrowsePage(curr_page + 1)
      }}>
      Next &#8608;
    </Button>

    <style jsx>{`
      div {
        padding: 1rem;
        display: flex;
        justify-content: center;
        flexwrap: wrap;
      }
    `}</style>
  </div>
)

Paginate.propTypes = _propTypes
Paginate.defaultProps = _defaultProps

export default Paginate
