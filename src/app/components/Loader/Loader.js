import React from 'react'
import { number } from 'prop-types'
import { color } from '../../constants/theme'
import { Caption } from '../Typography'

const _propTypes_Bar = {
  n: number.isRequired
}
const Bar = ({ n }) => (
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
Bar.propTypes = _propTypes_Bar

const Loader = () => (
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

export { Bar }
export default Loader
