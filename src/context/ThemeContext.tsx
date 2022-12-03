import { createContext } from 'react'
import useTheme, { TTheme, TThemeToggleHandler } from '@/hooks/useTheme'

interface IThemeProvider {
  theme: TTheme
  handleToggleTheme: TThemeToggleHandler
}

interface IThemeContextProviderProps {
  children?: React.ReactNode
}

const ThemeContext = createContext<IThemeProvider>({} as IThemeProvider)

function ThemeContextProvider({ children }: IThemeContextProviderProps) {
  const [theme, handleToggleTheme] = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
export { ThemeContext }
