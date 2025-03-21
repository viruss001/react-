import React, { useState } from 'react'
import useFetch from './Hooks/CustomHook'
import Teamp from './Hooks/Teamp'
const App = () => {
  const [name, setfirst] = useState("")
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
  if (error) {
    return (
      <div>Error: {error}</div>
    )
  }
  return (
    <>
      {data.slice(0,10).map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <Teamp name={name} setfirst={setfirst}/>
      {name}
    </>
  )
}

export default App