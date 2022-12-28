import { NextPage } from 'next'

import { Typography } from '@mui/material'

import { Layout } from '@/components/layout'

export const TopPage: NextPage = () => {
  return (
    <Layout title="Topページ">
      <Typography variant="h1">TopPage</Typography>
    </Layout>
  )
}
