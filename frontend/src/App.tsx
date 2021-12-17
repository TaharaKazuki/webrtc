import './App.css'
import { useEffect } from 'react'
import { connectionWithWebSocket } from './utils/wssConnection/wssConnection'

function App() {
  useEffect(() => {
    connectionWithWebSocket()
  }, [])
  return <div className="App">hello</div>
}

export default App
