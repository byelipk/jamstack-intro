import { useState } from "react"

const useFakeResponse = () => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const sendRequest = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setError(false)
      setResponse("Hello world")
    }, 1500)
  }

  return [{ response, loading, error }, sendRequest];
}

export default useFakeResponse