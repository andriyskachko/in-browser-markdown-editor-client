import { useState, useEffect } from 'react'
import { useError } from './useError'
import IDocument from '@/shared/IDocument'

const useDocuments = (): [IDocument[], Error, boolean] => {
  const [documents, setDocuments] = useState<IDocument[]>([])
  const [isLoading, setIsLoading] = useState(true)
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

      setIsLoading(false)

      return () => {
        console.log('Removed')
      }
    }

    fetchDocuments()
  }, [page])

  return [documents, error, isLoading]
}

export default useDocuments
export type { IDocument }
