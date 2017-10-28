import React from 'react'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'

const _Play = ({ url }) => (
  <Layout>
    <p>Play UI - {url.query.id}</p>
  </Layout>
)

export default withReduxSaga(_Play)
