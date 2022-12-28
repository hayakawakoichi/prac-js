import { NextPage, GetStaticProps } from 'next'

import { Box } from '@mui/material'

import { Layout } from '@/components/layout'
import Link from 'next/link'

const contents = [
  {
    path: '/react-docs/components/Fragment',
    title: 'Fragment',
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
          <Link key={path} href={path}>
            {title}
          </Link>
        ))}
      </Box>
    </Layout>
  )
}
