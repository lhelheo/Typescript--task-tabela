import { useState } from 'react'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Table />
      </div>
    </>
  )
}

export default App
