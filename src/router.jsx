import React from 'react'
import { HashRouter as Router, Route, Switch } from 'mickey'
import Layout from './components/Layout'
import Main from './components/Main'

const Routers = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/:username?" component={Main} />
      </Switch>
    </Layout>
  </Router>
)

export default Routers
