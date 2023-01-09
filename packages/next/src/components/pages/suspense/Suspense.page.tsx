import { NextPage } from 'next'
import { Suspense } from 'react'

import { Box, LinearProgress } from '@mui/material'

import { Layout } from '@/components/layout'

export const SuspensePage: NextPage = () => {
  return (
    <Layout
      title="<Suspense>"
      description="<Suspense>では、子プロセスの読み込みが終了するまでフォールバックを表示させることができます。"
    >
      <Box>
        <Suspense fallback={<LinearProgress />}>
          <Box>children</Box>
        </Suspense>
      </Box>
    </Layout>
  )
}
