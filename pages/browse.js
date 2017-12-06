import React from 'react'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'
import BrowseSongs from '../src/app/containers/BrowseSongs'

const _Login = ({ url }) => (
  <Layout>
    <BrowseSongs url={url.query} />
  </Layout>
)


export default withReduxSaga(_Login)
