import React, { PureComponent } from 'react'
import { node } from 'prop-types'
import { color } from '../../constants/theme'

export default class Button extends PureComponent {
  static propTypes = {
    children: node.isRequired
  }

  render() {
    const { disabled = false, children, ...props } = this.props
    return (
      <button disabled={disabled} {...props}>
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
              color: ${!disabled && color.primary()};
            }
            button:hover {
              color: ${!disabled && color.secondary()};
            }
            button:focus {
              outline: none;
            }
            button:disabled {
              cursor: not-allowed;
            }
          `}
        </style>
      </button>
    )
  }
}
