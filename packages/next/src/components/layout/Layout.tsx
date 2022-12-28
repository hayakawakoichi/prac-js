import { FC, ReactNode } from 'react'

import { Box } from '@mui/material'
import Head from 'next/head'

type LayoutProps = {
  title: string
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Next.js SandBox`}</title>
      </Head>
      <Box component="main">{children}</Box>
    </>
  )
}
