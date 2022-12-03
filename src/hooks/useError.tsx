import { useState } from 'react'

type TErrorHandler = (err: Error) => void

function useError(): [Error | undefined, TErrorHandler] {
  const [error, setError] = useState<Error>()

  const handleCatchError = (err: Error) => {
    setError(err)
    console.log(err.message)
  }

  return [error, handleCatchError]
}

export { useError }
export type { TErrorHandler }
