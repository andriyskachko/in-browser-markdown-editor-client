import React, { createContext, useState } from 'react'

type TTheme = 'light' | 'dark'

interface IThemeProvider {
  theme: TTheme
  handleToggleTheme: () => void
}

const ThemeContext = createContext<IThemeProvider>({} as IThemeProvider)

function ThemeContextProvider({ children }: { children?: React.ReactNode }) {
  const [theme, setTheme] = useState<TTheme>('dark')

  const handleToggleTheme = () => {
    const newTheme: TTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
export { ThemeContext }
export type { TTheme, IThemeProvider }
