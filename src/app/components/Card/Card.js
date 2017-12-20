import React from 'react'
import { string, func } from 'prop-types'
import { color } from '../../constants/theme'
import { BoxStyle } from '../Box'
import Left from './Left'
import Content from './Content'
import { Title } from '../Typography'

const _propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  height: string,
  onClick: func
}
const _defaultProps = {
  height: 'auto'
}

const Card = ({ id, title, height = 'auto', onClick }) => (
  <div onClick={onClick}>
    <Left id={id} height={height} />
    <Content>
      <Title>{title}</Title>
    </Content>
    <style jsx>{`
      div {
        ${BoxStyle};
        background-color: ${color.bg()};
        cursor: pointer;
        transition: all 0.5s;
      }
      div:hover {
        color: ${color.secondary(1)};
      }
    `}</style>
  </div>
)
Card.propTypes = _propTypes
Card.defaultProps = _defaultProps

export default Card
