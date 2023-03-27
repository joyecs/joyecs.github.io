import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Portfolio from '../pages/porfolio'
import Duty from './duty'

// The Roster component matches one of two different routes
// depending on the full pathname
const Works = () => (
  <Switch>
    <Route exact path='/portfolio' component={Portfolio} />
    <Route path='/portfolio/:project' component={Duty} />
  </Switch>
)


export default Works
