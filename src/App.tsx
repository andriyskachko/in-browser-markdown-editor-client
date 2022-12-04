import useThemeContext from '@/hooks/useThemeContext'
import DocumentContextProvider from '@/context/DocumentContext'
import '@sass/components/App.scss'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [theme] = useThemeContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <DocumentContextProvider>
      <div className={`App theme-${theme}`}>
        <Navbar isOpen={isOpen} handleOpen={handleOpen} />
      </div>
    </DocumentContextProvider>
  )
}

export default App
