import React from 'react'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'

const _Login = () => (
  <Layout>
    <p>BROWSE UI</p>
  </Layout>
)

export default withReduxSaga(_Login)
