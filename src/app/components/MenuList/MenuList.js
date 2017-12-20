import React from 'react'
import { bool } from 'prop-types'
import Router from 'next/router'
import { home, browse, login } from '../../constants/routes'
import { color } from '../../constants/theme'
import Button from '../Button'

const onRouteChangeCompleteHandler = ToggleMenu => () => {
  ToggleMenu()
  Router.onRouteChangeComplete = null
}

const onMenuClickHandler = (ToggleMenu, route, param) => () => {
  Router.push(route.href(param), route.as(param))
  Router.onRouteChangeComplete = onRouteChangeCompleteHandler(ToggleMenu)
}

const _propTypes = {
  isMenuOpen: bool.isRequired
}

const MenuList = ({ isMenuOpen, ToggleMenu }) => (
  <div>
    <Button onClick={onMenuClickHandler(ToggleMenu, home, null)}>Home</Button>
    <Button onClick={onMenuClickHandler(ToggleMenu, browse, 'A')}>Browse</Button>
    <Button onClick={onMenuClickHandler(ToggleMenu, login, null)}>Login</Button>
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
        transition: all 0.5s;
      }
    `}</style>
    <style jsx>{`
      div {
        opacity: ${isMenuOpen ? 1 : 0};
        z-index: ${isMenuOpen ? 10 : -1};
      }
    `}</style>
  </div>
)
MenuList.propTypes = _propTypes

export { onRouteChangeCompleteHandler, onMenuClickHandler }
export default MenuList
