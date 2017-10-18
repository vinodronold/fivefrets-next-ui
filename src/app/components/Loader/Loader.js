import React, { PureComponent } from 'react'
import { color } from '../../constants/theme'
import { Caption } from '../Typography'

export class Bar extends PureComponent {
  render() {
    const { n } = this.props
    return (
      <div className="bar">
        <style jsx>{`
          .bar {
            padding: 1rem;
            margin: 0.25rem;
            background-color: ${color.secondary()};
            transform: scaleY(0.75);
            animation: loading 0.5s infinite ease-in-out alternate;
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
        <style jsx>{`
          .bar {
            animation-delay: ${0.1 * n}s;
          }
        `}</style>
      </div>
    )
  }
}

export default class Loader extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="loader">
          <Bar n={0} />
          <Bar n={1} />
          <Bar n={2} />
          <Bar n={3} />
          <Bar n={4} />
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
        `}</style>
      </div>
    )
  }
}
