import React from 'react'
import { withReduxSaga } from '../src/app/store'
import Layout from '../src/app/Layout'

const _Home_Page = () => (
  <Layout>
    <p>fivefrets UI</p>
  </Layout>
)

export default withReduxSaga(_Home_Page)
