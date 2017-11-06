import React, { PureComponent } from 'react'
import { func, node, object } from 'prop-types'
import { color } from '../../constants/theme'

export const BoxStyle = `
display: flex;
align-items: center;
min-height: 3rem;
margin: 1rem auto;
background-color: ${color.bg()};
width: 80%;
`

export default class Box extends PureComponent {
  static propTypes = {
    children: node,
    style: object,
    onClick: func
  }

  render() {
    const { children, style, onClick } = this.props
    return (
      <div style={style} onClick={onClick}>
        {children}
        <style jsx>{`
          div {
            ${BoxStyle};
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}
