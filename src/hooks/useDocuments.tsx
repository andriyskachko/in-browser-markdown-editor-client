import { useState, useEffect } from 'react'
import { useError } from './useError'

interface IDocument {
  _id?: string
  name: string
  body: string
  createdAt: string
  updatedAt: string
}

const useDocuments = (): [IDocument[], Error] => {
  const [documents, setDocuments] = useState<IDocument[]>([])
  const [page, setPage] = useState(1)
  const [error, handleCatchError] = useError()

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch(
          `http://localhost:3000/markdown?page=${page}`
        )
        const newDocuments = (await response.json()) as IDocument[]
        setDocuments(documents.concat(newDocuments))
      } catch (error) {
        if (error instanceof Error) {
          handleCatchError(error)
        }
      }
    }

    fetchDocuments()
  }, [page])

  return [documents, error]
}

export default useDocuments
export type { IDocument }
