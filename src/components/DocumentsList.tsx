import IDocument from '@/shared/IDocument'
import DocumentListItem from '@/components/DocumentListItem'

interface DocumentsListProps {
  documents: IDocument[]
  error?: Error
  isLoading: boolean
}

function DocumentsList({ documents, error, isLoading }: DocumentsListProps) {
  return (
    <div>
      {isLoading && <h1>Loading..</h1>}
      {error && <h1>Error</h1>}
      {documents.map((document) => {
        return <DocumentListItem document={document} />
      })}
    </div>
  )
}

export default DocumentsList
