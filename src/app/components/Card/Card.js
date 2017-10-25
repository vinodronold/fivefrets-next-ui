import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { color } from '../../constants/theme'
import Left from './Left'
import Content from './Content'
import { Title, SubHeading1 } from '../Typography'

export default class Card extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    subtitle: string,
    height: string
  }

  render() {
    const { id, title, subtitle, height = 'auto' } = this.props
    return (
      <div>
        <Left id={id} height={height} />
        <Content>
          <Title>{title}</Title>
          <SubHeading1>{subtitle}</SubHeading1>
        </Content>
        <style jsx>{`
          div {
            display: flex;
            align-items: center;
            min-height: 3rem;
            margin: 1rem auto;
            background-color: rgba(0, 0, 0, 0.65);
            cursor: pointer;
            transition: all 0.5s;
            width: 80%;
          }
          div:hover {
            color: ${color.secondary(1)};
          }
        `}</style>
      </div>
    )
  }
}
