import React from 'react'
import { node, string } from 'prop-types'
import { color } from '../../constants/theme'

export const BoxStyle = `
display: flex;
align-items: center;
min-height: 3rem;
margin: 1rem auto;
width: 80%;
`
const _propTypes_Box = {
  children: node,
  bgColor: string
}

const _defaultProps_Box = {
  bgColor: color.bg()
}

const Box = ({ children, bgColor, ...props }) => (
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
Box.propTypes = _propTypes_Box
Box.defaultProps = _defaultProps_Box

const _propTypes_ErrorBox = {
  children: node
}
const ErrorBox = ({ children, ...props }) => (
  <Box bgColor={color.error()} {...props}>
    {children}
  </Box>
)
ErrorBox.propTypes = _propTypes_ErrorBox

export default Box
export { ErrorBox }
