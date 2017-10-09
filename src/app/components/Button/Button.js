import React from 'react'
import { node } from 'prop-types'
import { color } from '../../constants/theme'

const _propTypes = {
  children: node.isRequired
}

const Button = ({ disabled = false, children, ...props }) => (
  <button disabled={disabled} className={`${!disabled ? 'primary' : 'disabled'}`} {...props}>
    {children}
    <style jsx>
      {`
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
        button.primary {
          color: ${color.primary()};
        }
        button:focus {
          outline: none;
        }
        button.primary:hover {
          color: ${color.secondary()};
        }
        button:disabled {
          cursor: not-allowed;
        }
      `}
    </style>
  </button>
)

Button.propTypes = _propTypes

export default Button
