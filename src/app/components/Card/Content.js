import React from 'react'
import { node } from 'prop-types'

const _propTypes = {
  children: node.isRequired
}

const Content = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      margin: 0 1rem;
      display: block;
    `}</style>
  </div>
)
Content.propTypes = _propTypes

export default Content