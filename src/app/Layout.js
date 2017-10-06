import React from 'react'
import { baseFont, fontFamily, color } from './constants/theme'
import HeaderBar from './components/HeaderBar'
import Hamburger from './components/Hamburger'

export default ({ children }) => (
  <div>
    <HeaderBar />
    {children}
    <Hamburger />
    <style jsx global>{`
      html,
      body {
        font-size: ${baseFont};
        font-family: ${fontFamily};
        background: url('/static/img/main_banner.jpg') no-repeat left center fixed;
        background-color: ${color.bg()};
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
  </div>
)
