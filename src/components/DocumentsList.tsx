import IDocument from '@/shared/IDocument'
import DocumentListItem from '@/components/DocumentListItem'

interface IDocumentsListProps {
  documents: IDocument[]
  error?: Error
  isLoading: boolean
}

function DocumentsList({ documents, error, isLoading }: IDocumentsListProps) {
  const handleClick = (id?: string) => {
    console.log(id)
  }

  return (
    <div>
      {isLoading && <h1>Loading..</h1>}
      {error && <h1>Error</h1>}
      <ul>
        {documents.map((document) => {
          return (
            <DocumentListItem
              document={document}
              key={document._id}
              handleClick={handleClick}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default DocumentsList
