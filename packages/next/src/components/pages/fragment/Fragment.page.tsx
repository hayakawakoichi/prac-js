import { NextPage } from 'next'
import { FC, Fragment, ReactNode, useMemo } from 'react'

import { Box, Button, Typography } from '@mui/material'

import { CodeBlock } from '@/components/code'
import { Layout } from '@/components/layout'

export const FragmentPage: NextPage = () => {
  return (
    <Layout title="<Fragment> (<>...</>)">
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <Typography>
          {
            '要素を<Fragment>で囲むと、単一の要素が必要な状況で、要素をグループ化することができます。'
          }
        </Typography>
        <Typography>
          {
            'Fragmentで要素をグループ化しても、結果のDOMには何の影響も与えず、グループ化されていない場合と同じになります。'
          }
        </Typography>
        <Typography>
          {
            '空のJSXタグ<></>は、ほとんどの場合<Fragment></Fragment>の略記です。'
          }
        </Typography>
      </Box>

      <Typography variant="h2">
        Usage2. Assigning multiple elements to a variable.
      </Typography>

      <CodeBlock
        code={`const Usage2Component: FC = () => {
  const buttons = useMemo(
    () => (
      <>
        <Button>A button</Button>
        <Button>B button</Button>
      </>
    ),
    []
  )
  return (
    <>
      <Typography variant="h3">Usage2Component</Typography>
      <Usage2ComponentChild buttons={buttons} />
    </>
  )
}

const Usage2ComponentChild: FC<{ buttons: ReactNode }> = ({ buttons }) => {
  return (
    <>
      <Typography variant="h3">Usage2ComponentChild</Typography>
      {buttons}
    </>
  )
}`}
      />

      <Box
        sx={{
          marginX: '2rem',
          padding: '1rem',
        }}
      >
        ~ Usage2Component 表示 ~
        <Usage2Component />
      </Box>

      <Typography variant="h2">
        Usage3. Grouping elements with text.{' '}
      </Typography>

      <CodeBlock
        code={`const Usage3Component: FC = () => {
  return (
    <>
      From
      <Button>aaa</Button>
      to
      <Button>bbb</Button>
    </>
  )
}`}
      />
      <Box
        sx={{
          marginX: '2rem',
          padding: '1rem',
        }}
      >
        ~ Usage3Component 表示 ~
        <Box>
          <Usage3Component />
        </Box>
      </Box>

      <Typography variant="h2">
        Usage4. Rendering a list of Fragments
      </Typography>

      <CodeBlock
        code={`const Usage4Component: FC = () => {
  const blogs = useMemo(
    () => [
      { id: 1, title: 'yesterday', body: '昨日サウナに行った' },
      { id: 2, title: 'today', body: '今日サウナに行った' },
      { id: 3, title: 'tomorrow', body: '明日サウナに行った' },
    ],
    []
  )
  return (
    <>
      {blogs.map(({ id, title, body }) => (
        <Fragment key={id}>
          <Typography>title: {title}</Typography>
          <Typography>body: {body}</Typography>
        </Fragment>
      ))}
    </>
  )
}
`}
      />
      <Box>
        ~ Usage4Component 表示 ~
        <Usage4Component />
      </Box>
    </Layout>
  )
}

const Usage2Component: FC = () => {
  const buttons = useMemo(
    () => (
      <>
        <Button>A button</Button>
        <Button>B button</Button>
      </>
    ),
    []
  )
  return (
    <>
      <Typography variant="h3">Usage2Component</Typography>
      <Usage2ComponentChild buttons={buttons} />
    </>
  )
}

const Usage2ComponentChild: FC<{ buttons: ReactNode }> = ({ buttons }) => {
  return (
    <>
      <Typography variant="h3">Usage2ComponentChild</Typography>
      {buttons}
    </>
  )
}

const Usage3Component: FC = () => {
  return (
    <>
      From
      <Button>aaa</Button>
      to
      <Button>bbb</Button>
    </>
  )
}

const Usage4Component: FC = () => {
  const blogs = useMemo(
    () => [
      { id: 1, title: 'yesterday', body: '昨日サウナに行った' },
      { id: 2, title: 'today', body: '今日サウナに行った' },
      { id: 3, title: 'tomorrow', body: '明日サウナに行った' },
    ],
    []
  )
  return (
    <>
      {blogs.map(({ id, title, body }) => (
        <Fragment key={id}>
          <Typography>title: {title}</Typography>
          <Typography>body: {body}</Typography>
        </Fragment>
      ))}
    </>
  )
}
