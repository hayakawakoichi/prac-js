import { FC, ReactNode } from 'react'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

type ThemeProps = {
  children: ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#88ffff',
      main: '#4dd0e1',
      dark: '#009faf',
      contrastText: '#263238',
    },
    secondary: {
      light: '#9be7ff',
      main: '#64b5f6',
      dark: '#2286c3',
      contrastText: '#263238',
    },
    background: {
      default: '#fafafa',
      paper: '#fafafa',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '2rem',
      lineHeight: '1.75',
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: '1.75',
    },
    h3: {
      fontSize: '1.2rem',
      lineHeight: '1.75',
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    h5: {
      fontSize: '0.857rem',
      lineHeight: '1.5',
    },
    h6: {
      fontSize: '0.75rem',
      lineHeight: '1.5',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
})

export const CommonThemeProvider: FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
