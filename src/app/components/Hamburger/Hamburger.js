import React from 'react'
import { bool, func, number } from 'prop-types'
import { color } from '../../constants/theme'

const dim = 5
const _propTypes = {
  n: number.isRequired,
  isOpen: bool.isRequired
}
const _defaultProps = {
  isOpen: false
}

const Layer = ({ n, isOpen }) => (
  <span>
    <style jsx>{`
      span {
        display: block;
        border-radius: 2px;
        height: 4px;
        position: relative;
        margin: 0.5rem 0;
        top: ${dim * 0.24}rem;
        left: ${dim * 0.2}rem;
        background: ${color.primary()};
        transition: 0.25s ease-in-out;
        transition-delay: ${(isOpen ? 0 : 0.5) + 0.125 * (n - 1)}s;
        width: ${isOpen ? 0 : dim * 0.6}rem;
      }
    `}</style>
  </span>
)
Layer.propTypes = _propTypes
Layer.defaultProps = _defaultProps

const Arm = ({ n, isOpen }) => (
  <span>
    <style jsx>{`
      span {
        position: absolute;
        transition: 0.25s ease-in-out;
        background: ${color.primary()};
      }
    `}</style>
    <style jsx>{`
      span {
        top: ${n === 1 ? `30%` : `${dim * 0.48}rem`};
        left: ${n === 1 ? `${dim * 0.48}rem` : `30%`};
        width: ${n === 1 ? `4px` : `${isOpen ? 40 : 0}%`};
        height: ${n === 1 ? `${isOpen ? 40 : 0}%` : `4px`};
        transition-delay: ${n === 1 ? `${isOpen ? 0.625 : 0}s` : `${isOpen ? 0.375 : 0.25}s`};
      }
    `}</style>
  </span>
)
Arm.propTypes = _propTypes
Arm.defaultProps = _defaultProps

const _propTypes_Hamburger = {
  isMenuOpen: bool.isRequired,
  isSearchOpen: bool.isRequired,
  ToggleMenu: func.isRequired,
  ToggleSearch: func.isRequired
}
const _defaultProps_Hamburger = {
  isMenuOpen: false,
  isSearchOpen: false
}
const Hamburger = ({ isMenuOpen, isSearchOpen, ToggleMenu, ToggleSearch }) => (
  <div className="container" onClick={isSearchOpen ? ToggleSearch : ToggleMenu}>
    <div className="layers">
      {Array(3)
        .fill(1)
        .map((_, i) => <Layer key={i} n={i} isOpen={isMenuOpen || isSearchOpen} />)}
    </div>
    <div className="arms">
      {Array(2)
        .fill(1)
        .map((_, i) => <Arm key={i} n={i} isOpen={isMenuOpen || isSearchOpen} />)}
    </div>

    <style jsx>{`
      .container {
        width: ${dim}rem;
        height: ${dim}rem;
        bottom: 1.1rem;
        right: 1.1rem;
        position: fixed;
        cursor: pointer;
        border-radius: 50%;
        z-index: 15;
        transition: all 0.5s;
        background: ${color.secondary()};
      }
      .container:hover {
        background: ${color.secondary(0.8)};
      }
      .layers {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      .arms {
        position: absolute;
        height: 100%;
        width: 100%;
        transform: rotate(45deg);
      }
    `}</style>
  </div>
)
Hamburger.propTypes = _propTypes_Hamburger
Hamburger.defaultProps = _defaultProps_Hamburger

export default Hamburger
export { Layer, Arm }
