import React from 'react'
import { color } from '../../constants/theme'

const dim = 5
const Layer = ({ n, isOpen = false }) => (
  <span className={`${isOpen ? 'open' : 'closed'} ${n}`}>
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
      span.open.l2 {
        transition-delay: 0.125s;
      }
      span.open.l3 {
        transition-delay: 0.25s;
      }
      span.closed {
        width: ${dim * 0.6}rem;
      }
      span.closed.l1 {
        transition-delay: 0.5s;
      }
      span.closed.l2 {
        transition-delay: 0.625s;
      }
      span.closed.l3 {
        transition-delay: 0.75s;
      }
    `}</style>
  </span>
)

const Arm = ({ n, isOpen = false }) => (
  <span className={`${isOpen ? 'open' : 'closed'} ${n}`}>
    <style jsx>{`
      span {
        position: absolute;
        transition: 0.25s ease-in-out;
        background: ${color.primary()};
      }
      span.l1 {
        top: 30%;
        left: ${dim * 0.48}rem;
        width: 4px;
        height: 0;
        transition-delay: 0s;
      }
      span.l1.open {
        height: 40%;
        transition-delay: 0.625s;
      }
      span.l2 {
        top: ${dim * 0.48}rem;
        left: 30%;
        width: 0;
        height: 4px;
        transition-delay: 0.25s;
      }
      span.l2.open {
        width: 40%;
        transition-delay: 0.375s;
      }
    `}</style>
  </span>
)

export default ({ isMenuOpen, isSearchOpen, ToggleMenu, ToggleSearch }) => (
  <div className="container">
    <div className="layers">
      {Array(3)
        .fill(1)
        .map((_, i) => <Layer key={i} n={`l${i + 1}`} isOpen={isMenuOpen || isSearchOpen} />)}
    </div>
    <div className="arms">
      {Array(2)
        .fill(1)
        .map((_, i) => <Arm key={i} n={`l${i + 1}`} isOpen={isMenuOpen || isSearchOpen} />)}
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
