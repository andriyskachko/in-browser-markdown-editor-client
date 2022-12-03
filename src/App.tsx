import useThemeContext from '@/hooks/useThemeContext'
import DocumentContextProvider from '@/context/DocumentContext'
import '@sass/components/App.scss'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {
  const [theme] = useThemeContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DocumentContextProvider>
      <div className={`App theme-${theme}`}>
        <Sidebar isOpen={isOpen} />
      </div>
    </DocumentContextProvider>
  )
}

export default App
