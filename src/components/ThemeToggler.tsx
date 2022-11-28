import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@sass/components/ThemeToggler.scss'

type TTheme = 'light' | 'dark'

function ThemeToggler() {
  const [theme, setTheme] = useState<TTheme>('dark')

  const handleChangeTheme = () => {
    const newTheme: TTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className="ThemeToggler">
      <FontAwesomeIcon
        icon="moon"
        color="white"
        className={theme === 'dark' ? 'theme-icon selected' : 'theme-icon'}
      />
      <label className="toggler">
        <input
          type="checkbox"
          className="hidden"
          onChange={() => handleChangeTheme()}
        />
        <span className="slider round" />
      </label>
      <FontAwesomeIcon
        icon="sun"
        color="white"
        className={theme === 'light' ? 'theme-icon selected' : 'theme-icon'}
      />
    </div>
  )
}

export default ThemeToggler
