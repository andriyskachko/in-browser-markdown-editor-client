import useThemeContext from '@/hooks/useThemeContext'
import useDocuments from '@/hooks/useDocuments'
import ThemeToggler from '@/components/ThemeToggler'
import DocumentsList from './components/DocumentsList'
import '@sass/components/App.scss'

function App() {
  const [theme] = useThemeContext()
  const [documents, error, isLoading] = useDocuments()

  return (
    <div className={`App theme-${theme}`}>
      <ThemeToggler />
      <DocumentsList
        documents={documents}
        error={error}
        isLoading={isLoading}
      ></DocumentsList>
    </div>
  )
}

export default App
