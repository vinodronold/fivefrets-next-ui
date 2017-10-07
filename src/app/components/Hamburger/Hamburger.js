import React from 'react'
import { color } from '../../constants/theme'

const dim = 5
export const Layer = ({ n, isOpen = false }) => (
  <span className={`${isOpen ? 'open' : 'closed'} l${n}`}>
    <style jsx>{`
      span {
        display: block;
        border-radius: 2px;
        height: 4px;
        position: relative;
        margin: 0.5rem 0;
        top: ${dim * 0.24}rem;
        left: ${dim * 0.2}rem;
        transition: 0.25s ease-in-out;
        background: ${color.primary()};
      }
      span.open {
        width: 0rem;
      }
      span.open.l1 {
        transition-delay: 0.125s;
      }
      span.open.l2 {
        transition-delay: 0.25s;
      }
      span.closed {
        width: ${dim * 0.6}rem;
      }
      span.closed.l0 {
        transition-delay: 0.5s;
      }
      span.closed.l1 {
        transition-delay: 0.625s;
      }
      span.closed.l2 {
        transition-delay: 0.75s;
      }
    `}</style>
  </span>
)

export const Arm = ({ n, isOpen = false }) => (
  <span className={`${isOpen ? 'open' : 'closed'} a${n}`}>
    <style jsx>{`
      span {
        position: absolute;
        transition: 0.25s ease-in-out;
        background: ${color.primary()};
      }
      span.a0 {
        top: 30%;
        left: ${dim * 0.48}rem;
        width: 4px;
        height: 0;
        transition-delay: 0s;
      }
      span.a0.open {
        height: 40%;
        transition-delay: 0.625s;
      }
      span.a1 {
        top: ${dim * 0.48}rem;
        left: 30%;
        width: 0;
        height: 4px;
        transition-delay: 0.25s;
      }
      span.a1.open {
        width: 40%;
        transition-delay: 0.375s;
      }
    `}</style>
  </span>
)

export default ({ isMenuOpen = false, isSearchOpen = false, ToggleMenu, ToggleSearch }) => (
  <div className="container">
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
