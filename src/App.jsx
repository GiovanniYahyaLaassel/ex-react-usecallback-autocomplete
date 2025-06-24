import { useState } from 'react'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <h1>Autocomplete con debounce</h1>
         <SearchBar />

      </div>

    </>
  )
}

export default App
