import React from 'react'
import { string } from 'prop-types'
import { YTImg } from '../../utils'

const _propTypes = {
  id: string.isRequired,
  height: string.isRequired
}

const Left = ({ id, height }) => (
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
Left.propTypes = _propTypes

export default Left
