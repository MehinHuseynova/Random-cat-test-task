import { useState, useCallback } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

interface CatFactType {
  fact: string
  length: number
}

export const Main = () => {
  const [randomFact, setRandomFact] = useState<CatFactType>({
    fact: '',
    length: 0,
  })

  const refreshCount = Number(localStorage.getItem('refreshCount')) ?? 0

  const getNewCatFacts = useCallback(async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact')
      setRandomFact(response.data)
      localStorage.setItem('refreshCount', String(refreshCount + 1))
    } catch (error) {
      console.log(error)
    }
  }, [randomFact])

  if (!randomFact) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>{randomFact.fact}</h1>
      <p>Refresh Count : {refreshCount}</p>
      <Button onClick={getNewCatFacts}>Refresh</Button>
    </>
  )
}
