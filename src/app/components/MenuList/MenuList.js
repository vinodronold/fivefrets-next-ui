import React, { PureComponent } from 'react'
import { bool } from 'prop-types'
import { color } from '../..//constants/theme'
import Button from '../Button'

export default class MenuList extends PureComponent {
  static propTypes = {
    isMenuOpen: bool.isRequired
  }
  render() {
    const { isMenuOpen } = this.props
    return (
      <div>
        <Button>Home</Button>
        <Button>Browse</Button>
        <Button>Login</Button>
        <style jsx>{`
          div {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            overflow: hidden;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            color: ${color.primary()};
            background-color: ${color.bg()};
            transition: all 0.5s;
          }
        `}</style>
        <style jsx>{`
          div {
            opacity: ${isMenuOpen ? 1 : 0};
            z-index: ${isMenuOpen ? 10 : -1};
          }
        `}</style>
      </div>
    )
  }
}
