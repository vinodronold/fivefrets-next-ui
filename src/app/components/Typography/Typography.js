import React, { PureComponent } from 'react'
import { oneOfType, number, string, object, node } from 'prop-types'

export const GetLetterSpacing = ls => (typeof ls === 'number' ? `${ls}rem` : ls)

export default class Typo extends PureComponent {
  static propTypes = {
    fs: number.isRequired,
    fw: number.isRequired,
    ls: oneOfType([number, string]).isRequired,
    lh: number.isRequired,
    children: node.isRequired,
    style: object
  }
  
  render() {
    const { fs, fw, ls, lh, style = {}, children } = this.props
    return (
      <div style={style}>
        {children}
        <style jsx>{`
          div {
            text-decoration: inherit;
            text-transform: inherit;
          }
        `}</style>
        <style jsx>{`
          div {
            font-size: ${fs}rem;
            font-weight: ${fw};
            letter-spacing: ${GetLetterSpacing(ls)};
            line-height: ${lh}rem;
          }
        `}</style>
      </div>
    )
  }
}

export const GenerateTypo = (fs, fw, ls, lh) => ({ children, style }) => (
  <Typo fs={fs} fw={fw} ls={ls} lh={lh} style={style}>
    {children}
  </Typo>
)

export const Title = GenerateTypo(1.25, 500, 0.02, 2)
export const SubHeading1 = GenerateTypo(0.938, 400, 0.04, 1.5)
export const Caption = GenerateTypo(0.75, 400, 0.08, 1.25)
