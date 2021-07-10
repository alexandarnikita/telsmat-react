import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import LayoutRoute from './components/LayoutRoute'
import MainPage from './pages/Main'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <LayoutRoute path='/' exact component={MainPage}/>
      </Switch>
    </Router>
  )
}

export default AppRouter
