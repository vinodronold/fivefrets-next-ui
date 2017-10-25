import React from 'react'
import { baseFont, fontFamily, color } from './constants/theme'
import HeaderBar from './components/HeaderBar'
import MenuButton from './containers/MenuButton'
import Menu from './containers/Menu'
import Content from './containers/Content'
import SearchBar from './containers/SearchBar'

export default ({ children }) => (
  <div>
    <Content>
      <HeaderBar />
      <SearchBar />
      {children}
    </Content>
    <Menu />
    <MenuButton />

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
