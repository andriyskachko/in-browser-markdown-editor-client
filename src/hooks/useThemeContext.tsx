import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { TTheme, TThemeToggleHandler } from '@/hooks/useTheme'

const useThemeContext = (): [TTheme, TThemeToggleHandler] => {
  const { theme, handleToggleTheme } = useContext(ThemeContext)
  return [theme, handleToggleTheme]
}

export default useThemeContext
