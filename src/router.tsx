import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import LayoutRoute from './components/LayoutRoute'
import DevicePage from './pages/Device'
import DssPage from './pages/Dss'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <LayoutRoute path='/' exact component={DevicePage}/>
        <LayoutRoute path='/dss/:id' exact component={DssPage}/>
      </Switch>
    </Router>
  )
}

export default AppRouter
