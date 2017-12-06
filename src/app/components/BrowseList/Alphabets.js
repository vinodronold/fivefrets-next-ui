import React from 'react'
import Link from 'next/link'
import { browse } from '../../constants/routes'
import Button from '../Button'
import Box from '../Box'

export default () => (
  <Box>
    {['0 - 1', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')].map(a => (
      <Link prefetch key={a} href={browse.href(a.substr(0, 1))} as={browse.as(a.substr(0, 1))}>
        <Button style={{ padding: '.5rem' }}>{a}</Button>
      </Link>
    ))}
  </Box>
)
