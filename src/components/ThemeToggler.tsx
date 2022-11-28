import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@/hooks/useTheme'
import '@sass/components/ThemeToggler.scss'

function ThemeToggler() {
  const { theme, handleToggleTheme } = useTheme()

  return (
    <div className="ThemeToggler">
      <FontAwesomeIcon
        icon="moon"
        color="white"
        className={theme === 'dark' ? 'theme-icon selected' : 'theme-icon'}
      />
      <label className="toggler">
        <input
          name="theme"
          type="checkbox"
          className="hidden"
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
