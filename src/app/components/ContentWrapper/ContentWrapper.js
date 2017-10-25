import React, { PureComponent } from 'react'
import { bool, node } from 'prop-types'
import { color } from '../../constants/theme'

export default class ContentWrapper extends PureComponent {
  static propTypes = {
    isMenuOpen: bool.isRequired,
    children: node.isRequired
  }
  render() {
    const { isMenuOpen, children } = this.props
    return (
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
  }
}
