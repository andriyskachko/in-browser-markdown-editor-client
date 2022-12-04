import DocumentListItem from '@/components/DocumentListItem'
import useDocuments from '@/hooks/useDocuments'
import '@sass/components/DocumentsList.scss'

function DocumentsList() {
  const [documents, error, isLoading] = useDocuments()

  const handleClick = (id?: string) => {
    console.log(id)
  }

  return (
    <ul className="DocumentsList" style={{ padding: '2.4rem 0', margin: 0 }}>
      {documents.map((document) => {
        return (
          <DocumentListItem
            document={document}
            key={document._id}
            handleClick={handleClick}
          />
        )
      })}
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
    </ul>
  )
}

export default DocumentsList
