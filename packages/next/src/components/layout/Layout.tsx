import { FC, ReactNode } from 'react'

import { Box, Typography } from '@mui/material'
import Head from 'next/head'

type LayoutProps = {
  title: string
  children: ReactNode
  description?: string
}

export const Layout: FC<LayoutProps> = ({ title, children, description }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Next.js SandBox`}</title>
      </Head>
      <Box component="main">
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h1">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Box>
        <Box sx={{ padding: 10 }}>{children}</Box>
      </Box>
    </>
  )
}
