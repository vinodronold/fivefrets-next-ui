import React from 'react'
import { bool, func, string } from 'prop-types'
import { color } from '../..//constants/theme'
import Button from '../Button'

const _propTypes = {
  isMenuOpen: bool.isRequired,
  ToggleMenu: func.isRequired,
  className: string
}

const MenuList = ({ isMenuOpen, ToggleMenu, className }) => (
  <div className={`${className} ${isMenuOpen ? 'open' : 'close'}`}>
    <Button>Home</Button>
    <Button>Browse</Button>
    <Button>Login</Button>
    <style jsx>{`
      div {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        overflow: hidden;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        color: ${color.primary()};
        background-color: ${color.bg()};
        opacity: 0;
        z-index: 0;
        transition: all 0.5s;
      }
      .open {
        opacity: 1;
        z-index: 10;
      }
    `}</style>
  </div>
)

MenuList.propTypes = _propTypes

export default MenuList
