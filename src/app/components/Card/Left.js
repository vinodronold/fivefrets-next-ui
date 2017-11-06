import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { YTImg } from '../../utils'

export default class Left extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    height: string.isRequired
  }
  render() {
    const { id, height } = this.props
    return (
      <div>
        <img src={YTImg(id)} alt={'YT'} height={height} width={'auto'} />
        <style jsx>{`
          div {
            display: flex;
            margin-right: 1rem;
            align-items: center;
            height: auto;
            width: auto;
          }
        `}</style>
      </div>
    )
  }
}
