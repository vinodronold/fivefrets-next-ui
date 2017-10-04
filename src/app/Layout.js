import React from 'react'
import HeaderBar from './components/HeaderBar'

export default ({ children }) => (
  <div>
    <HeaderBar />
    {children}
  </div>
)
