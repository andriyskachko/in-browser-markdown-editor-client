import useThemeContext from '@/hooks/useThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@sass/components/ThemeToggler.scss'

function ThemeToggler() {
  const [theme, handleToggleTheme] = useThemeContext()

  return (
    <div className="ThemeToggler">
      <FontAwesomeIcon
        icon="moon"
        color="white"
        className={theme === 'dark' ? 'theme-icon selected' : 'theme-icon'}
      />
      <label className="toggler" tabIndex={0} aria-label="Change the theme">
        <input
          type="checkbox"
          className="hidden"
          aria-hidden
          checked={theme === 'light'}
          onChange={() => handleToggleTheme()}
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
