import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { IThemeProvider } from '@/context/ThemeContext'

const useTheme = (): IThemeProvider => {
  const { theme, handleToggleTheme } = useContext(ThemeContext)
  return { theme, handleToggleTheme }
}

export { useTheme }
