import { useState } from 'react';
import './App.css'
import Weather from "./weather";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Henok's Weather Forcast App</h1>
        <Weather/>
    </div>
  )
}

export default App
