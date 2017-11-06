import React from 'react'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'
import Home from '../src/app/containers/Home'

const _Home_Page = () => (
  <Layout>
    <Home />
  </Layout>
)

export default withReduxSaga(_Home_Page)
