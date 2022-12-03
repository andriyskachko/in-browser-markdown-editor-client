import IDocument from '@/shared/IDocument'
import { createContext, ReactNode, useState } from 'react'

interface IDocumentProvider {
  document?: IDocument
  handleSelectDocument: (document: IDocument) => void
}

const DocumentContext = createContext({} as IDocumentProvider)

function DocumentContextProvider({ children }: { children?: ReactNode }) {
  const [document, setDocument] = useState<IDocument>()

  const handleSelectDocument = (newDocument: IDocument) => {
    // TODO check if current document has any changes
    // if it does -> prompt user to save changes or discard them with modal
    setDocument(newDocument)
    console.log('Set new Document: ')
    console.log(newDocument)
  }

  return (
    <DocumentContext.Provider value={{ document, handleSelectDocument }}>
      {children}
    </DocumentContext.Provider>
  )
}

export default DocumentContextProvider
export type {}
