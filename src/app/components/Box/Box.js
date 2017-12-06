import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'
import { color } from '../../constants/theme'

export const BoxStyle = `
display: flex;
align-items: center;
min-height: 3rem;
margin: 1rem auto;
width: 80%;
`

export default class Box extends PureComponent {
  static propTypes = {
    children: node,
    bgColor: string
  }

  render() {
    const { children, bgColor = color.bg(), ...props } = this.props
    return (
      <div {...props}>
        {children}
        <style jsx>{`
          div {
            ${BoxStyle};
            background-color: ${bgColor};
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}

export class ErrorBox extends PureComponent {
  render() {
    const { children, ...props } = this.props
    return (
      <Box bgColor={color.error()} {...props}>
        {children}
      </Box>
    )
  }
}
