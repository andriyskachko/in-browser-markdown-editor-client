import { useTheme } from '@/hooks/useTheme'
import ThemeToggler from '@/components/ThemeToggler'

function App() {
  const { theme } = useTheme()
  return (
    <div className={`App theme-${theme}`}>
      <ThemeToggler />
    </div>
  )
}

export default App
