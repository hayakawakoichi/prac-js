import { NextPage } from 'next'
import {
  FC,
  Profiler,
  ProfilerOnRenderCallback,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { Box, Button, Typography } from '@mui/material'

import { Layout } from '@/components/layout'

export const ProfilerPage: NextPage = () => {
  const onRender: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    intaraction
  ) => {
    console.log({
      id,
      phase,
      actualDuration, // 現在の更新で <Profiler> とその子孫をレンダリングするのに費やされたミリ秒数です。これは、サブツリーがメモ化（例：memo や useMemo）をどの程度うまく利用しているかを示しています。理想的には、子孫の多くは特定のプロップが変更された場合にのみ再レンダリングが必要になるため、この値は最初のマウント後に大幅に減少するはずです。
      baseDuration, // 最適化せずに <Profiler> サブツリー全体を再レンダリングするのにかかる時間をミリ秒単位で指定します。これは、ツリー内の各コンポーネントの最新のレンダリング時間を合計することによって計算されます。この値は、レンダリングの最悪の場合のコスト (たとえば、最初のマウントやメモ化されていないツリー) を推定します。メモライゼーションが機能しているかどうかを確認するために、actualDuration をこれと比較します。
      startTime,
      commitTime,
      intaraction,
    })
  }
  return (
    <Layout title="<Profiler>">
      <Typography variant="subtitle1">
        {
          '<Profiler>は、Reactツリーのレンダリングパフォーマンスをプログラムで測定することができます。'
        }
      </Typography>
      <Profiler id="profiler-example" onRender={onRender}>
        <SomeComponent />
      </Profiler>
    </Layout>
  )
}

const SomeComponent: FC = () => {
  const [number, setNumber] = useState(0)
  const onClick = useCallback(() => {
    setNumber(number + 1)
  }, [number])

  const memorized = useMemo(
    () => [...Array(10)].map((_, index) => <Box key={index}>{index}</Box>),
    []
  )

  return (
    <Box>
      <Typography>SomeComponent</Typography>
      <Typography>number: {number}</Typography>
      <Button onClick={onClick}>update</Button>
      {memorized}
    </Box>
  )
}
