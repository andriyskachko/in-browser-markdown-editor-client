import useThemeContext from '@/hooks/useThemeContext'
import useDocuments from '@/hooks/useDocuments'
import ThemeToggler from '@/components/ThemeToggler'
import '@sass/components/App.scss'

function App() {
  const [theme] = useThemeContext()
  const [documents, error] = useDocuments()

  return (
    <div className={`App theme-${theme}`}>
      <ThemeToggler />
    </div>
  )
}

export default App
