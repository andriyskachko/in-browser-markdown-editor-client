import { useState, useEffect } from 'react'
import { useError } from './useError'
import axios from 'axios'
import IDocument from '@/shared/IDocument'

const useDocuments = (): [IDocument[], Error, boolean] => {
  const [documents, setDocuments] = useState<IDocument[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [error, handleCatchError] = useError()

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await axios.get<IDocument[]>(
          `http://localhost:3000/markdown?page=${page}`
        )
        const { data } = response
        setDocuments(documents.concat(data))
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
