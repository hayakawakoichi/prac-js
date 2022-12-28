import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import type { AppProps } from 'next/app'
import { CommonThemeProvider } from '../components/mui/ThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommonThemeProvider>
        <Component {...pageProps} />
      </CommonThemeProvider>
    </>
  )
}
