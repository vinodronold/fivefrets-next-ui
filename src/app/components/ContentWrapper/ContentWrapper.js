import React from 'react'
import { bool, node } from 'prop-types'
import { color } from '../../constants/theme'

const _propTypes = {
  isMenuOpen: bool.isRequired,
  children: node.isRequired
}
const ContentWrapper = ({ isMenuOpen, children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        opacity: ${isMenuOpen ? 0 : 1};
        z-index: ${isMenuOpen ? 0 : 10};
        color: ${color.primary()};
      }
    `}</style>
  </div>
)
ContentWrapper.propTypes = _propTypes

export default ContentWrapper
