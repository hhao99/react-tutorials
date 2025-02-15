import { useState } from 'react'


import data from "./data";
import List from './List';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container w-full mx-auto">
      <h1 className="text-3xl text-gray-800">Birthday</h1>
      <h3>created with Sketch.</h3>

      <div>
        <List data={data} />
      </div>
    </div>
  )
}

export default App
