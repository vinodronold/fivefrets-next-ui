import React from 'react'
import { color } from '../../constants/theme'

export default () => (
  <div>
    <span>fivefrets</span>
    <style jsx>
      {`
          div {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            justify-content: center;
            height: 3rem;
            transition: all 0.5s;
            background-color: ${color.bg()}
            color: ${color.primary()};
          }
          span {
            font-size: 1.25rem;
            letter-spacing: 0.75rem;
            font-feature-settings: "liga" 0;
          }
          `}
    </style>
  </div>
)
