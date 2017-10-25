import React, { PureComponent } from 'react'
import { node } from 'prop-types'
export default class Content extends PureComponent {
  static propTypes = {
    children: node.isRequired
  }
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{`
          margin: 0 1rem;
          display: block;
        `}</style>
      </div>
    )
  }
}
