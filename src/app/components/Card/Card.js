import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import { color } from '../../constants/theme'
import { BoxStyle } from '../Box'
import Left from './Left'
import Content from './Content'
import { Title } from '../Typography'

export default class Card extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    height: string,
    onClick: func
  }

  render() {
    const { id, title, height = 'auto', onClick } = this.props
    return (
      <div onClick={onClick}>
        <Left id={id} height={height} />
        <Content>
          <Title>{title}</Title>
        </Content>
        <style jsx>{`
          div {
            ${BoxStyle};
            cursor: pointer;
            transition: all 0.5s;
          }
          div:hover {
            color: ${color.secondary(1)};
          }
        `}</style>
      </div>
    )
  }
}
