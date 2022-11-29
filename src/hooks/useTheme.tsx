import { useState } from 'react'

type TTheme = 'light' | 'dark'
type TThemeToggleHandler = () => void

const useTheme = (): [TTheme, TThemeToggleHandler] => {
  const [theme, setTheme] = useState<TTheme>('dark')

  const handleToggleTheme = () => {
    const newTheme: TTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return [theme, handleToggleTheme]
}

export default useTheme
export type { TTheme, TThemeToggleHandler }
