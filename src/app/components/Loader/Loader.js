import React, { PureComponent } from 'react'
import { color } from '../../constants/theme'
import { Caption } from '../Typography'

export default class Loader extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="loader">
          <div className="bar" />
          <div className="bar d1" />
          <div className="bar d2" />
          <div className="bar d3" />
          <div className="bar d4" />
        </div>
        <Caption>LOADING...</Caption>

        <style jsx>{`
          .container {
            text-align: center;
          }
          .loader {
            display: flex;
            justify-content: center;
            margin: 2rem;
          }
          .bar {
            padding: 1rem;
            margin: 0.25rem;
            background-color: ${color.secondary()};
            transform: scaleY(0.75);
            animation: loading 0.5s infinite ease-in-out alternate;
          }
          .d1 {
            animation-delay: 0.1s;
          }
          .d2 {
            animation-delay: 0.2s;
          }
          .d3 {
            animation-delay: 0.3s;
          }
          .d4 {
            animation-delay: 0.4s;
          }
          @keyframes loading {
            0% {
              transform: scaleY(0.75);
            }
            100% {
              transform: scaleY(1.25);
            }
          }
        `}</style>
      </div>
    )
  }
}
