import { useState } from 'react'

type TErrorHandler = (err: Error) => void

function useError(): [Error, TErrorHandler] {
  const [error, setError] = useState<Error>({} as Error)

  const handleCatchError = (err: Error) => {
    setError(err)
  }

  return [error, handleCatchError]
}

export { useError }
export type { TErrorHandler }
