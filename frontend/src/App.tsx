import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { connectionWithWebSocket } from './utils/wssConnection/wssConnection'

// page
import Dashbord from './page/Dashbord/Dashbord'
import Login from './page/Login/Login'

function App() {
  useEffect(() => {
    connectionWithWebSocket()
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashbord} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
