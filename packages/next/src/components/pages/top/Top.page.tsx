import { NextPage } from 'next'

import { Box } from '@mui/material'
import Link from 'next/link'

import { Layout } from '@/components/layout'

const contents = [
  {
    path: '/react-docs/components/Fragment',
    title: 'Fragment',
  },
  {
    path: '/react-docs/components/Profiler',
    title: 'Profiler',
  },
]

export const TopPage: NextPage = () => {
  return (
    <Layout title="Topページ">
      <Box
        sx={{
          marginTop: 2,
          textAlign: 'center',
        }}
      >
        {contents.map(({ path, title }) => (
          <Box key={path}>
            <Link href={path}>{title}</Link>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}
