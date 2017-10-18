import React, { PureComponent } from 'react'

export const GetLetterSpacing = ls => (typeof ls === 'number' ? `${ls}rem` : ls)

export default class Typo extends PureComponent {
  render() {
    const { fs, fw, ls, lh } = this.props
    return (
      <div>
        {this.props.children}
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

export const GenerateTypo = (fs, fw, ls, lh) => ({ children }) => (
  <Typo fs={fs} fw={fw} ls={ls} lh={lh}>
    {children}
  </Typo>
)

export const Display1 = GenerateTypo(2.125, 400, 'normal', 2.5)
export const Caption = GenerateTypo(0.75, 400, 0.08, 1.25)
