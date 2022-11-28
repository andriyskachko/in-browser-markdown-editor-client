import { useTheme } from '@/hooks/useTheme'
import ThemeToggler from '@/components/ThemeToggler'
import '@sass/components/App.scss'

function App() {
  const { theme } = useTheme()
  return (
    <div className={`App theme-${theme}`}>
      <ThemeToggler />
    </div>
  )
}

export default App
