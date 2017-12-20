import React from 'react'
import { bool, node } from 'prop-types'
import { color } from '../../constants/theme'

const _propTypes = {
  disabled: bool,
  children: node.isRequired
}
const _defaultProps = {
  disabled: false
}

const Button = ({ disabled, children, ...props }) => (
  <button disabled={disabled} {...props}>
    {children}
    <style jsx>{`
      button {
        font-size: 0.938rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        letter-spacing: 0.2rem;
        line-height: 0.938rem;
        height: 2.5rem;
        background: transparent;
        border: none;
        transition: all 0.5s;
      }
      button:focus {
        outline: none;
      }
      button:disabled {
        cursor: not-allowed;
      }
    `}</style>
    <style jsx>{`
      button {
        color: ${!disabled && color.primary()};
      }
      button:hover {
        color: ${!disabled && color.secondary()};
      }
    `}</style>
  </button>
)
Button.propTypes = _propTypes
Button.defaultProps = _defaultProps

export default Button
